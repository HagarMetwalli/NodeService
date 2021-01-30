let express=require("express"),
    morgan=require("morgan"),
  
  
    StudentRouter=require("./Routers/StudentsRouter"),
    DepartmentRouter=require("./Routers/DepartmentsRouter"),
    CourseRouter=require("./Routers/CourseRouter")
    path=require("path"),
    bodyParser=require("body-parser"),
    express_session=require("express-session"),
    connect_flash=require("connect-flash"),
    cookie_parser=require("cookie-parser"),
    mongoose=require("mongoose");

    // express_ejs_layouts=require("express-ejs-layouts");
    mongoose.connect("mongodb+srv://HagarAngular:ElhamdLlh@cluster0.etyn2.mongodb.net/itidb?authSource=admin&replicaSet=atlas-74vnul-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass%20Community&retryWrites=true&ssl=true");
//open server
let server=express();





/********************* Routings */
server.set("view engine","ejs");
server.set("views",path.join(__dirname,"views"));
server.use(express.static(path.join(__dirname,"publics")));
server.use(bodyParser.urlencoded());


server.use(bodyParser.json());




server.use(/\//,(request,response)=>{

    // response.send("HOME");
    // response.sendFile(path.join(__dirname,"views","home.html"));
    response.render("home");
});



server.use("/Students",StudentRouter);
server.use("/Departments",DepartmentRouter);
server.use("/Courses",CourseRouter);
server.use((request,response)=>{
    response.send("Not Found");

});


server.listen(8000,()=>{
    console.log("I am Listening ......");

});
