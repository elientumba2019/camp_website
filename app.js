var express = require("express");
var app = express();

var campground = [
        {name : "New camp1" , image : "image1"},
        {name : "New camp2" , image : "image2"},
        {name : "New camp3" , image : "image3"}
        ];

//setting the view engine
app.set("view engine" , "ejs");



//landing page route
app.get('/' , function(req , res) {
    res.render('landing');
});



//camp ground route
app.get('/campgrounds' , function(req , res) {
    res.render('campgrounds' , {campground : campground});
});



//campground ground for adding new camps
app.post('/campgrounds' , function(req , res) {
    res.render('campgrounds' , {campground : campground});
});



//server listener
app.listen(process.env.PORT , process.env.IP , function(){
    console.log("Server started and Running ar : " + process.env.PORT);
});