//Node modules import
var express 	= require('express');
var session		= require('express-session')
var bodyParser 	= require('body-parser');
var cors 		= require('cors');
var massive		= require('massive');

var config 		= require('./config.js');

var port 		= config.port;

//Initialize, Export, and Configure the app
var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());
app.use(session({secret: config.sessionSecret}));
app.use(express.static(__dirname +'/public'));


//Local File modules AFTER app initialization
var loginController 	= require('./node_controllers/loginController.js');
var menuController		= require('./node_controllers/menuController.js');
var accountController	= require('./node_controllers/accountController.js');
var orderController 	= require('./node_controllers/orderController.js');
var menuItemController 	= require('./node_controllers/menuItemsController.js');

//Connect to DB
var conn = massive.connectSync({
	connectionString:config.connectString
});
app.set('db',conn);
var db = app.get('db');

//Authorization Middleware	=	=	=	=	=	=
var restAuthCheck = function(req,res,next) {
	if(loginController.checkLoggedIn(req)){
		next();
	} else {
		db.get_restaurant_account_data(1, function(err, testUser) {
			req.session.currentUser = testUser[0];
			next();
		})
	}
	//PROD:	res.status(401).send("You must be logged in as a restaurant to use this resource");
}

var custAuthCheck = function(req,res,next) {
	if(!!req.session.currentCustomer) {
		next()
	} else {
		res.status(401).send("You must be logged in as a customer to use this resource");
	}
}

var tableAuthCheck = function(req,res,next) {
	if(!!req.session.currentTable) {
		next()
	} else {
		res.status(401).send("You must be logged in as a table account to use this resource");
	}
}

//END POINTS	=	=	=	=	=	=	=	=	=

//Authentication	=	=	=
app.post('/api/auth/login', loginController.login);
app.post('/api/auth/logout', loginController.logout);
app.get('/api/auth/currentuser', loginController.getCurrentUser);
app.post('/api/auth/table/login', restAuthCheck, loginController.loginTableAccount);


//Accounts	=	=	=	=	=
app.post('/api/account/restaurant', accountController.createRestaurantAccount);
app.post('/api/account/customer', accountController.createCustomerAccount);
app.post('/api/account/table', restAuthCheck, accountController.createTableAccount);
app.get('/api/account/table/list', restAuthCheck, accountController.getTableAccountList);
app.get('/api/account/table/:table_id', restAuthCheck, accountController.getTableAccount);

//Orders	=	=	=	=	=
app.post('/api/order', tableAuthCheck, orderController.createOrder);
app.get('/api/order/:order_id', restAuthCheck, orderController.getOrder);
app.get('/api/order/list/open', restAuthCheck, orderController.getOpenOrders);

//getMenuSummaryList=	=	=
app.post('/api/menu', restAuthCheck, menuController.createMenu);
app.get('/api/menu/:menu_id',restAuthCheck, menuController.getMenuById);
app.put('/api/menu', restAuthCheck, menuController.updateMenu);
app.delete('/api/menu/:menu_id', restAuthCheck, menuController.deleteMenu);
app.get('/api/menu/list/summary', restAuthCheck, menuController.getMenuSummaryList);
app.get('/api/menu/list/details', menuController.getMenuDetailsList);

//Menu Items	=	=	=	=
app.post('/api/menuitem', restAuthCheck, menuItemController.createMenuItem);
app.get('/api/menuitem/:menu_item_id', restAuthCheck, menuItemController.getMenuItem);
app.put('/api/menuitem', restAuthCheck, menuItemController.updateMenuItem);
app.get('/api/menuitem/list/:menu_id', restAuthCheck, menuItemController.getMenuItemsForMenu);


//SPIN UP THE DRIVES!!
app.listen(port, function() {
  console.log("Started server on port", port, (new Date()).toTimeString());
});
