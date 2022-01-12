
var mongoose=require('mongoose')
var course=require('../course.js')
const department = require('../department.js')
//var department=require('../department')

module.exports.add_department=(req,res)=>{

    const std=new department()
    std.name=req.body.name,
    //std.id=req.params.id,

    course.findOne({_id:req.body._id},async(err,data)=>{

if(err){
    console.log(err);
}
    else if(!data){
        console.log("data is not preasnt at the place: ");
        
}
else{
    console.log("data");
  await std.courses.push(data._id)
}
await std.save().then((data) => {
    res.send(data)
})
.catch((err) => {
    res.send(err);
})

    })
}
module.exports.show=(req,res)=>{

department.findOne({_id:req.body._id}).populate("courses").exec((err,data)=>{
if(err){
    console.log(err);
}
else{
    res.send(data);
}


})

}


