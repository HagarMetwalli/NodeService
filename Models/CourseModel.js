let mongoose=require("mongoose");


let CourseSchema=new mongoose.Schema({
    _id:Number,
    Name:String,
   
});



//mapping
mongoose.model("Courses",CourseSchema);

