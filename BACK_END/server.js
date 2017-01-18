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
var menuNode 			= require('./node_controllers/menuNodeController.js');
var accountController	= require('./node_controllers/accountController.js');

//Connect to DB
var conn = massive.connectSync({
	connectionString:"postgres://postgres:" + config.postgres.password + "@localhost/" + config.postgres.db_name
});
app.set('db',conn);
var db = app.get('db');

app.listen(port, function() {
  console.log("Started server on port", port, (new Date()).toTimeString());
});




//Custom Middleware
var authcheck = function(req,res,next) {
	if(loginController.checkLoggedIn(req)){
		next();
	} else {
		res.status(401).send("You need to login to view this resource");
	}
}

//END POINTS

//Authentication
app.post('/api/auth/login', loginController.login);
app.post('/api/auth/logout', loginController.logout);

//Accounts
app.post('/api/account/restaurant', accountController.createRestaurantAccount);
app.post('/api/account/customer', accountController.createCustomerAccount);
//Orders


//Menus
app.get('/api/menu/:menu_id',authcheck, menuNode.getMenuById);

//Menu Items


