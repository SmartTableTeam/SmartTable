var app = require('./../server.js');

module.exports = {
	createRestaurantAccount:createRestaurantAccount,
	createCustomerAccount:createCustomerAccount,
	createTableAccount:createTableAccount,
	getTableAccountList:getTableAccountList,
	getTableAccount:getTableAccount
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
					console.log(req.body.name, "BODY NAME");
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
								req.session.currentCustomer = customer;
								res.status(200).send(customer)
							} else {
								console.log(err);
								res.status(500).send(err);
							}
						})
					} else {
						console.log(err);
						res.status(500).send(err);
					}
				})
			}
		} else {
			console.log(err);
			res.status(500).send(err);
		}
	})
}


function createTableAccount(req, res) {
	var db = app.get('db');
	var tableAcct = {
		restaurant_id:req.session.currentUser.restaurant_id,
		table_number:req.body.table_number
	}
	db.table_accounts.insert(tableAcct, function(err, newTableAcct) {
		if(!err) {
			res.status(200).send(newTableAcct);
		} else {
			res.status(500).send(err);
		}
	})
}

function getTableAccountList(req, res) {
	var db = app.get('db');

	db.table_accounts.find({restaurant_id:req.session.currentUser.restaurant_id}, function(err, tableAccounts) {
		if(!err) {
			res.status(200).send(tableAccounts);
		} else {
			res.status(500).send(err);
		}
	})
}

function getTableAccount(req, res) {
	var db = app.get('db');

	var tableToFind = {
		id:req.params.table_id,
		restaurant_id: req.session.currentUser.restaurant_id
	}

	db.table_accounts.find(tableToFind, function(err, tableAccount) {
		if(!err) {
			if(tableAccount.length > 0) {
				res.status(200).send(tableAccount);
			} else {
				res.status(422).send("No table account found for given ID and User");
			}
		} else {
			res.status(500).send(err);
		}
	})

}
