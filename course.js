var mongoose=require('mongoose')

const course=mongoose.Schema({
    name:{type:String,required:true},
 //course_id:{type:Number}
  code:{type:Number},
  

})
module.exports=mongoose.model('course',course)