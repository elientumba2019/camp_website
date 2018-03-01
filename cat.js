var mongoose = require("mongoose");

//connect
mongoose.connect("mongodb://localhost/cat_app");


//cat schema 
var catSchema = new mongoose.Schema(
    {
        name : String,
        age : Number,
        temperament : String
        
    });
    
    
    
var Cat = mongoose.model("Cat" , catSchema);


//adding new cats
Cat.create({
    
    name : "Show white",
    age : 15,
    temperament : "Blanc"
} , function(err , cat){
    
    if(err){
        console.log("Errr : " + err);
    }
    else{
        console("Cat");
        console(cat);
    }
});




//retrive all cats
Cat.find(function(err , cats){
    if(err){
        console.log("Oh error");
        console.log(err);
    }
    else{
        console.log("Cats list");
        console.log(cats);
    }
});





