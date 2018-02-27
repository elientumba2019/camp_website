var express = require("express");
var app = express();


//landing page route
app.get('/' , function(req , res) {
    res.send("TODO : implement landing page");
});



//server listener
app.listen(process.env.PORT , process.env.IP , function(){
    console.log("Server started and Running ar : " + process.env.PORT);
});