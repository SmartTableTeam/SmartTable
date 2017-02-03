var app = require('./../server.js');

module.exports = {
	createMenuItem:createMenuItem,
	getMenuItem:getMenuItem,
	updateMenuItem:updateMenuItem,
	getMenuItemsForMenu:getMenuItemsForMenu
}


function createMenuItem(req, res) {
	var db = app.get('db');
	console.log(req.body);
	db.menu_items.insert(req.body, function(err, newMenuItem) {
		if(!err) {
			res.status(200).send(newMenuItem);
		} else {
			console.log(err);
			res.status(500).send(err);
		}
	})

}

function getMenuItem(req, res) {
	var db = app.get('db');

	db.menu_items.findOne(parseInt(req.params.menu_item_id), function(err, menuItem) {
		if(!err) {
			if(!!menuItem) {
				res.status(200).send(menuItem);
			} else {
				res.status(422).send("No menu item found for that ID");
			}
		} else {
			res.status(500).send(err)
		}
	})

}

function updateMenuItem(req, res) {
	var db = app.get('db');

	db.menu_items.update(req.body, function(err, newMenuItem) {
		if(!err) {
			res.status(200).send(newMenuItem);
		} else {
			res.status(500).send(err);
		}
	})


}

function getMenuItemsForMenu(req, res) {
	var db = app.get('db');
	db.menu_items.find({menu_id:parseInt(req.params.menu_id)}, function(err, menuItems) {
		if(!err) {
			if(menuItems.length > 0) {
				res.status(200).send(menuItems);
			} else {
				res.status(422).send("No menu items found for that ID");
			}
		} else {
			res.status(500).send(err)
		}
	})
}
