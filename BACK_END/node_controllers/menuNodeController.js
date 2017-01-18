var app = require('./../server.js');

module.exports = {
	getMenuById:getMenuById
}


function getMenuById(req,res,next) {
	var db = app.get('db');
	var menuRequestData = {
		id: parseInt(req.params.menu_id),
		restaurant_id: req.session.currentUser.restaurant_id
	}
	console.log(menuRequestData);
	db.menus.find(menuRequestData, function(err, menu) {
		if(!err) {
			db.menu_items.find({menu_id:parseInt(req.params.menu_id)}, function(err, menuItems) {
				if(!err) {
					menu.menu_items = menuItems;
					res.status(200).send(menu);
				} else {
					res.status(500).send(err);
				}
			})

		} else {
			res.status(500).send(err);
		}
		
	})
}