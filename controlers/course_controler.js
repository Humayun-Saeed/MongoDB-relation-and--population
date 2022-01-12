

var mongoose=require('mongoose')
var course=require('../course.js')
var express=require('express')
module.exports.course_add=(req,res)=>{
const co=new course()
co.name=req.body.name,
co.code=req.body.code
console.log(req.body.name);
console.log(req.body.code);

co.save().then((data) => {
    res.send(data);
})
.catch((err) => {
console.log(err);
})


}
