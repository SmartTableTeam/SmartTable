var app = require('./../server.js');
module.exports={
  getAddress:function(req,res,next) {
    var db = app.get('db')

    db.get_restaurantAddress(function(err,response) {
      console.log(response);
        res.status(200).send(response)
    })

  }
}
