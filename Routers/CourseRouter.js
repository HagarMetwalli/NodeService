let express=require("express"),
CourseRouter=express.Router(),
path=require("path"),
mongoose=require("mongoose");


CourseRouter.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  

require("../Models/CourseModel")
require("../Models/StudentModel")

let courseSchema=mongoose.model("Courses");

CourseRouter.get("/add",(request,response)=>{

    courseSchema.find({},(error,result)=>{
       response.render("departments/adddepertment");
        //response.send(result);
    })
})
CourseRouter.get("/edit/:id",(request,response)=>{

    courseSchema.findOne({_id:request.params.id},(error,result)=>{

        
            response.render("departments/editDepartment",{dept:result});
    
       

    });
})
CourseRouter.get("/delete/:id",(request,response)=>{
    courseSchema.deleteOne({_id:request.params.id},(error)=>{
        if(!error)
        response.send({data:"deleted"})
        else
        response.send(error)
        // response.redirect("/departments/list");
    })
});

CourseRouter.post("/edit/:id",(request,response)=>{
  

    courseSchema.update({_id:request.params.id},{
        "$set":{
            Name:request.body.Name,
          
        }
    },(error)=>{
        if(!error)
        {
            courseSchema.findOne({_id:request.params.id},(err,result)=>{
               if(!err)
                response.send(result);
                else
                response.send(err)
            });
           // response.redirect("/departments/list");
        }
        else
        {
            response.send(error)
        }
    })


})
CourseRouter.post("/add",(request,response)=>{
    let dept=new courseSchema({
        _id:request.body._id,
        Name:request.body.Name,
      
    });
    dept.save((error)=>{
        if(!error)
        {  
            courseSchema.findOne({_id:request.body.id},(error,result)=>{
            response.send(result);
        });
        }
        else
        response.send(err);
        //response.redirect("/departments/list");
    });
})
CourseRouter.get("/list",(request,response)=>{

    // eventSchema.find({},(error,result)=>{
    //     response.render("events/eventslist",{events:result});

 
    courseSchema.find({},(error,result)=>{
        response.send(result);
        //response.render("Departments/departmentList",{depts:result});
    });

    

})
CourseRouter.get("/details/:id",(request,response)=>{

    courseSchema.findOne({_id:request.params.id},(error,result)=>{

        if(!error)
            response.send(result)
        else
            response.send(error);
        // departmentSchema.find({},(error,result2)=>{
        //     response.send(result2);
        //     //response.render("students/editStudent",{student:result,depts:result2})
        // })
       

    });
})


module.exports=CourseRouter;