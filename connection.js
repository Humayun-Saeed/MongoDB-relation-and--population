
var mongoose=require('mongoose')
mongoose.connect("mongodb+srv://Humayun-Saeed:s12345678@cluster0.p48xj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
.then(()=>{
    console.log("connected to the databse successfully: ");
})
.catch((err)=>{
    console.log(err);
})
