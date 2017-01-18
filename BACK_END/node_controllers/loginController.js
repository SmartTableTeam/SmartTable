var app = require('./../server.js');

module.exports = {
	login:login,
	logout:logout,
	checkLoggedIn:checkLoggedIn,
	getCurrentUser:getCurrentUser
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
	if(!!req.session & !!req.session.currentUser) {
		req.session.currentUser = null;
	}
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
	res.status(200).send('Method To Be Implemented');
}