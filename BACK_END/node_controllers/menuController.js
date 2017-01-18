var app = require('./../server.js');

module.exports = {
	createMenu:createMenu,
	getMenuById:getMenuById,
	updateMenu:updateMenu,
	deleteMenu:deleteMenu,
	getMenuSummaryList:getMenuSummaryList,
	getMenuDetailsList:getMenuDetailsList
}

/*	=	=	=	=	=	=	=	=	=
All of these menus require a user to be logged in.
Also, the get, update, delete, and list methods require the right user to be logged in.
If a user not tied to those menus is logged in, then nothing will happen.
=	=	=	=	=	=	=	=	=	=*/

function createMenu(req,res) {
	var db = app.get('db');
	
	var menu = {
		restaurant_id:req.session.currentUser.restaurant_id,
		category:req.body.category,
		description:req.body.description,
		sort_num:1,
		banner_url:req.body.banner_url
	}

	db.menus.insert(menu, function(err, newMenu) {
		if(!err) {
			res.status(200).send(newMenu);
		} else {
			console.log(err);
			res.status(500).send(err);
		}
	})
}

function getMenuById(req,res,next) {
	var db = app.get('db');
	var menuRequestData = {
		id: parseInt(req.params.menu_id),
		restaurant_id: req.session.currentUser.restaurant_id
	}
	db.menus.find(menuRequestData, function(err, menu) {
		if(!err) {
			db.menu_items.find({menu_id:parseInt(req.params.menu_id)}, function(err, menuItems) {
				if(!err) {
					menu[0].menu_items = menuItems;
					console.log(menu);
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

function updateMenu(req,res) {
	var db = app.get('db');
	
	var menuRequestData = {
		id: parseInt(req.body.id),
		restaurant_id: req.session.currentUser.restaurant_id
	}
	//CHECK IF THE MENU MATCHES THE LOGGED IN USER
	db.menus.find(menuRequestData, function(err, menu) {
		if(!err) {
			if(menu.length > 0) {
				db.menus.update(req.body, function(err, updatedMenu) {
					if(!err) {
						res.status(200).send(updatedMenu);
					} else {
						res.status(500).send(err);
					}
				})
			} else {
				res.status(422).send("No menu found for the given id");
			}
		} else {
			res.status(500).send(err);
		}
		
	})
}

function deleteMenu(req,res) {
	var db = app.get('db');
	var menuRequestData = {
		id: parseInt(req.params.menu_id),
		restaurant_id: req.session.currentUser.restaurant_id
	}
	//CHECK IF THE MENU MATCHES THE LOGGED IN USER 
	db.menus.find(menuRequestData, function(err, menu) {
		if(!err) {
			if(menu.length > 0) {
				db.orphan_menu_items([req.params.menu_id], function(err, deleted_items) {
					if(!err) {
						db.menus.destroy({id:req.params.menu_id}, function(err, deletedMenu) {
							if(!err) {
								res.status(200).send(deletedMenu);
							}
						})
					} else {
						res.status(500).send(err);
					}
				})
			} else {
				res.status(422).send("No menu found for the given id");
			}
		} else {
			res.status(500).send(err);
		}
		
	})
}

function getMenuSummaryList(req,res) {
	var db = app.get('db');
	db.menus.find({restaurant_id:req.session.currentUser.restaurant_id}, function(err, menus) {
		if(!err) {
			res.status(200).send(menus);
		} else {
			res.status(500).send(err);
		}
	})
}

function getMenuDetailsList(req, res) {
	var db = app.get('db');
	
	db.menus.find({restaurant_id:req.session.currentUser.restaurant_id}, function(err, resMenus) {
		if(!err) {
			db.get_menu_items_for_user([req.session.currentUser.restaurant_id], function(err, resMenuItems) {
				if(!err) {
				
					//Sort the menu objects into a list
					var menuListObj = {}
					for(var i = 0; i < resMenus.length; i++) {
						menuListObj[resMenus[i].id] = resMenus[i];
						menuListObj[resMenus[i].id].menuItems=[];
					}

					//Go through the resultant menu items, adding them to the right menu
					for(var j = 0; j < resMenuItems.length; j++) {
						menuListObj[resMenuItems[j].menu_id].menuItems.push(resMenuItems[j]);
					}

					//Convert menuListObject into an array
					var menuList = []
					for (var key in menuListObj) {
						menuList.push(menuListObj[key]);
					}
					res.status(200).send(menuList);
				} else {
					res.status(500).send(err);
				}
			})
		} else {
			res.status(500).send(err);
		}
	})
}