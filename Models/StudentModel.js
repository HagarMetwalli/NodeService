let mongoose=require("mongoose");

let studentSchema=new mongoose.Schema({
    _id:Number,
    Name:String,
    Email:String,
    Department:{
        type:String,
        ref:"Departments"
    },
    Course:{
        type:String,
        ref:"Courses"
    }
});



//mapping
mongoose.model("Students",studentSchema);