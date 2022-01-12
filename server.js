
var express=require('express')
var app=express()
var department=require('./routes/department.js')
var course=require('./routes/course.js')
var connection=require('./connection.js')
var mongoose=require('mongoose')
app.use(express.json())
app.use('/',department)
app.use('/',course)
app.listen(8000,()=>{
    console.log("server is listening at the port: ");
})