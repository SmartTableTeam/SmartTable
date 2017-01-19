var app = require('./../server.js');

module.exports = {
	createOrder:createOrder,
	getOrder:getOrder,
	getOpenOrders:getOpenOrders
}


function createOrder(req, res) {
	var db = app.get('db');

	var orderToCreate = {
		table_account_id:req.session.currentTable.id,
		create_time: new Date(),
		status: 1
	}

	db.orders.insert(orderToCreate, function(err, newOrder) {
		if(!err) {
			var orderItems = req.body;
			for(var i = 0; i < orderItems.length; i++) {
				orderItems[i].order_id = newOrder.id;
			}
			db.order_items.insert(orderItems, function(err, newOrderItems) {
				if(!err){
					newOrder.order_items = newOrderItems;
					res.status(200).send(newOrder);
				} else {
					res.status(500).send(err);
				}
			})
		} else {
			res.status(500).send(err);
		}
	})
}

function getOrder(req,res) {
	var db = app.get('db');

	db.orders.findOne(parseInt(req.params.order_id), function(err, order) {
		if(!err) {
			if(!!order) {
				db.order_items.find({order_id:req.params.order_id}, function(err, orderItems) {
					if(!err) {
						order.order_items = orderItems;
						res.status(200).send(order);
					} else {
						res.status(500).send(err);
					}
				})	
			} else {
				res.status(422).send("No order found for that ID");
			}
		} else {
			res.status(500).send(err);
		}
	})

}

function getOpenOrders(req,res) {
	var db = app.get('db');
	db.get_open_orders_for_restaurant([req.session.currentUser.restaurant_id], function(err, orders) {
		if(!err) {
			res.status(200).send(orders);
		} else {
			res.status(500).send(err);
		}
	})


}