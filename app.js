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
    image : String,
    desc : String
});


//modeling the schema
var Campground = mongoose.model("Campground" , campgroundSchema);




//adding a camp temporary
var campX = {
    
    name : "Good camp",
    image : "No image",
    desc : "The perfect camp in the east"
}
/*
Campground.create(campX , function(err , inserted) {
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
//index shows all campground
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
            res.render('index' , {campground : results});
        }
    });
    
    //res.render('campgrounds' , {campground : campgroundArray});
});




//campground ground for adding new camps
//add new campground to the database
app.post('/campgrounds' , function(req , res) {
    
    //getting values form the form
    var nameC = req.body.name;
    var imageC = req.body.image;
    var descP = req.body.desc;
    var newCamp = {name : nameC , image : imageC , desc : descP};
    
    
    //create a new camp and save it to the database
    Campground.create(newCamp , function(err , newlyCamp) {
        if(err){
            console.log("error occured while inserting data in the database : " + err);
            
        }
        else{
            console.log("newly inserted element : ");
            console.log(newlyCamp);
        }
    });
    
    
    //redirect to the campground page
    res.redirect('/campgrounds');
});




//route for the form to add a new camp
//show the form to create the database
app.get('/campgrounds/new' , function(req, res) {
    res.render('new');
});





//route for showing a specific camp
// show more information about a campground
app.get('/campgrounds/:id' , function(req, res) {
    
    //find camp given the id
    var idCamp = req.params.id;
    Campground.findById(idCamp , function(err , found) {
        
        if(err){
            console.log("Error encountered while retrieving the user info");
        }
        else{
            
            //render the template
             res.render("show" , {campground : found});
        }
    });
    
    
    
});




//server listener
app.listen(process.env.PORT , process.env.IP , function(){
    console.log("Server started and Running ar : " + process.env.PORT);
});



