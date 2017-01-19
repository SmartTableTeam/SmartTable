var app = require('./../server.js');

module.exports = {
	createOrder:createOrder,
	getOrder:getOrder,
	getOpenOrders:getOpenOrders
}


function createOrder(req, res) {
	var db = app.get('db');

	
}

function getOrder(req,res) {
	var db = app.get('db');

}

function getOpenOrders(req,res) {
	var db = app.get('db');

}