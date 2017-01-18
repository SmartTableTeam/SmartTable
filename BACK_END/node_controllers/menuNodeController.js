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
<<<<<<< HEAD
	console.log(menuRequestData);
=======
>>>>>>> d7779681446d3a1526cca78d8429aeec7f2d477b
	db.menus.find(menuRequestData, function(err, menu) {
		if(!err) {
			db.menu_items.find({menu_id:parseInt(req.params.menu_id)}, function(err, menuItems) {
				if(!err) {
<<<<<<< HEAD
					menu.menu_items = menuItems;
=======
					menu[0].menu_items = menuItems;
					console.log(menu);
>>>>>>> d7779681446d3a1526cca78d8429aeec7f2d477b
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