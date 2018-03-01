var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose"); //importing mongoose



//connecting mongoose
mongoose.connect("mongodb://localhost/yelp_camp");

//setting body parser to be used
app.use(bodyParser.urlencoded({extended : true}));

//setting the view engine
app.set("view engine" , "ejs");




//defining the database schema
var campgroundSchema = new mongoose.Schema({
    
    name : String,
    image : String
    
});


//modeling the schema
var Campground = mongoose.model("Campground" , campgroundSchema);



//adding a camp temporary
/*
Campground.create(campgroundArray[1] , function(err , inserted) {
    if(err){
        console.log(err)
    }
    else{
        console.log("Newly created background");
        console.log(inserted);
    }
});
*/



//landing page route
app.get('/' , function(req , res) {
    res.render('landing');
});



//campground route
app.get('/campgrounds' , function(req , res) {
    //get all campground from the database 
    Campground.find({} , function(err , results){
        
        if(err){
            //printing error message
            console.log("Error encountered whilte retriving files from the database");
    
        }
        else{
            //seding the retrieved results to the page
            res.render('campgrounds' , {campground : results});
        }
    });
    
    //res.render('campgrounds' , {campground : campgroundArray});
});




//campground ground for adding new camps
app.post('/campgrounds' , function(req , res) {
    
    //getting values form the form
    var nameC = req.body.name;
    var imageC = req.body.image;
    var newCamp = {name : nameC , image : imageC};
    
    //pusing new camp to the array;
    campgroundArray.push(newCamp);
    
    //redirect to the campground page
    res.redirect('/campgrounds');
});




//route for the form to add a new camp
app.get('/campgrounds/new' , function(req, res) {
    res.render('new');
});




//server listener
app.listen(process.env.PORT , process.env.IP , function(){
    console.log("Server started and Running ar : " + process.env.PORT);
});