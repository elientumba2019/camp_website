var express = require("express");
var app = express();


//landing page route



//server listener
app.listen(process.env.PORT , process.env.IP , function(){
    console.log("Server started and Running ar : " + process.env.PORT);
});