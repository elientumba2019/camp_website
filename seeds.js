var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require('./models/comment')



//data array for all campgrounds
var data = [
    {
        name: "Cloud's Rest", 
        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
        name: "Desert Mesa", 
        image: "https://farm6.staticflickr.com/5487/11519019346_f66401b6c1.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
        name: "Canyon Floor", 
        image: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    }
];



function seedDB(){

    //empty the database
    Campground.remove({} , function (err) {
        // body...
        if(err){
            console.log(err);
        }
        console.log('empty the db by removing all campground');
        
        
        //add a few camground using a for each loop yeah ha
        data.forEach(function(seed){
            
            //inside the loop inserting individual elements in the
            //database 
            Campground.create(seed , function(err , insertedCamp) {
                if(err){
                    console.log(err);
                }
                else{
                    
                    console.log("Added a campground");
                    //create a comment on each camp yeah ha
                    Comment.create({
                        text : 'this place is really great',
                        author : 'Elie'
                        
                    } , function(err , comment){
                        //inside comment callback
                        if(err){
                            console.log(err);
                        }
                        else{
                            
                        //adding a comment on each camp
                        insertedCamp.comments.push(comment);
                        
                        
                        //inserting the camp to the database
                        insertedCamp.save()
                        console.log('Created new comment');
                            
                        }
                        
                       
                    });
                }
            });
            
        });
        
        
        //add a few comments
    });

}


module.exports = seedDB;