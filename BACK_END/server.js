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

//Connect to DB
var conn = massive.connectSync({
	connectionString:"postgres://postgres:@localhost/" + config.postgres.db_name
});
app.set('db',conn);
var db = app.get('db');

//Custom Middleware
var authcheck = function(req,res,next) {
	if(loginController.checkLoggedIn(req)){
		next();
	} else {
		res.status(401).send("You must be logged in as a restaurant to use this resource");
	}
}

//END POINTS	=	=	=	=	=	=	=	=	=

//Authentication	=	=	=
app.post('/api/auth/login', loginController.login);
app.post('/api/auth/logout', loginController.logout);

//Accounts	=	=	=	=	=
app.post('/api/account/restaurant', accountController.createRestaurantAccount);
app.post('/api/account/customer', accountController.createCustomerAccount);


//Orders	=	=	=	=	=


//getMenuSummaryList=	=	=
app.post('/api/menu', authcheck, menuController.createMenu);
app.get('/api/menu/:menu_id',authcheck, menuController.getMenuById);
app.put('/api/menu', authcheck, menuController.updateMenu);
app.delete('/api/menu/:menu_id', authcheck, menuController.deleteMenu);
app.get('/api/menu/list/summary', authcheck, menuController.getMenuSummaryList);
app.get('/api/menu/list/details', menuController.getMenuDetailsList);

//Menu Items	=	=	=	=






//SPIN UP THE DRIVES!!
app.listen(port, function() {
  console.log("Started server on port", port, (new Date()).toTimeString());
});
