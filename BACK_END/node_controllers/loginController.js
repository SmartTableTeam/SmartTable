var app = require('./../server.js');

module.exports = {
	login:login,
	logout:logout,
	checkLoggedIn:checkLoggedIn,
	getCurrentUser:getCurrentUser,
	loginTableAccount:loginTableAccount
}


function login(req,res) {
	var db = app.get('db');
	var loginData = {
		email: req.body.email,
		password: req.body.password
	}
	db.accounts.find(loginData, function(err,result) {
		if(!err) {
			if(result.length < 1) {
				res.status(422).send("Incorrect email/password combination");
			} else {
				db.get_restaurant_account_data([result[0].id], function(err, user) {
				
					if(!err) {
						req.session.currentUser = user[0];
						res.status(200).send(req.session.currentUser);
					} else {
						res.status(500).send(err);
					}
				})
			}
		} else {
			res.status(500).send(err);
		}
	})
}

function logout(req,res) {
	req.session.currentUser = null;
	req.session.currentCustomer = null;
	req.session.currentTable = null;
	res.status(200).send("User Logged Out");
}

function checkLoggedIn(req) {
	if(!!req.session && !!req.session.currentUser) {
		return true;
	} else {
		return false;
	}
}

function getCurrentUser(req,res) {
	if(!!req.session.currentUser) {
		res.status(200).send(req.session.currentUser);
	} else if (!!req.session.currentTable) {
		res.status(200).send(req.session.currentTable);
	} else if (!!req.session.currentCustomer) {
		res.status(200).send(req.session.currentCustomer);
	} else {
		res.status(422).send("No user is currently logged in");
	}
}

function loginTableAccount(req,res) {
	var db = app.get('db');
	var tableToFind = {
		id:req.body.table_account_id,
		restaurant_id: req.session.currentUser.restaurant_id
	}

	db.table_accounts.find(tableToFind, function(err, tableAccounts) {
		if(!err) {
			if(tableAccounts.length > 0) {
				req.session.currentUser = null;
				req.session.currentTable = tableAccounts[0];
				res.status(200).send(req.session.currentTable);
			} else {
				res.status(422).send("No table account found for given ID and User");
			}
		} else {
			res.status(500).send(err);
		}
	})
}