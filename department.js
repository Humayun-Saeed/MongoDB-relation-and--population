

var mongoose=require('mongoose')
const course = require('./course')

const department=mongoose.Schema({
    name:{type:String},
   //department_id:{type:Number},
    courses:[{
        type:mongoose.Types.ObjectId,
        ref:'course'
    }]
})
module.exports=new mongoose.model('department',department)