var app = require('./../server.js');

module.exports = {
	createRestaurantAccount:createRestaurantAccount,
	createCustomerAccount:createCustomerAccount
}

function createRestaurantAccount(req, res) {
	var db = app.get('db');

	var account = {
		join_date: new Date(),
		email: req.body.email,
		password:req.body.password
	};

	db.accounts.find({email:req.body.email}, function(err, result) {
		if(!err) {
			if(result.length > 0) {
				res.status(422).send("Account already exists for that email address");
			} else {
				db.accounts.insert(account, function(err, newAccount) {
					if(!err) {
						var restaurant = {
							account_id: newAccount.id,
							name: req.body.name,
							address: req.body.address,
							city: req.body.city,
							state: req.body.state,
							phone_number: req.body.phone_number
						}			
						db.restaurants.insert(restaurant, function(err, restaurant) {
							if(!err) {
								db.get_restaurant_account_data(newAccount.id, function(err, fullAccount) {
									if(!err) {
										req.session.currentUser = fullAccount;
										res.status(200).send(fullAccount);	
									}
								})
							}
						})
					}
				})
			}				
		}
	})
}

function createCustomerAccount(req, res) {
		var db = app.get('db');

	var account = {
		join_date: new Date(),
		email: req.body.email,
		password:req.body.password
	};

	db.accounts.find({email:req.body.email}, function(err, result) {
		if(!err) {
			if(result.length > 0) {
				res.status(422).send("Account already exists for that email address");
			} else {
				db.accounts.insert(account, function(err, newAccount) {
					if(!err) {
						var customer = {
							account_id: newAccount.id,
							first_name: req.body.first_name,
							last_name:req.body.last_name
						}			
						db.customers.insert(customer, function(err, customer) {
							if(!err) {
								req.session.currentUser = customer;
								console.log(req.session.currentUser);
								res.status(200).send(customer)
							} else {
								console.log(err);
								res.status(500).send(err);
							}
						})
					}
				})
			}				
		}
	})
}