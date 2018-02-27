var express = require("express");
var app = express();

//setting the view engine
app.set("view engine" , "ejs");


//landing page route
app.get('/' , function(req , res) {
    res.render("landing");
});



//server listener
app.listen(process.env.PORT , process.env.IP , function(){
    console.log("Server started and Running ar : " + process.env.PORT);
});