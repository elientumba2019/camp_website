var mongoose = require("mongoose");


//defining the database schema
var campgroundSchema = new mongoose.Schema({
    
    name : String,
    image : String,
    desc : String
});


//exporting the file
module.exports = mongoose.model("Campground" , campgroundSchema);
