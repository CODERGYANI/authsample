const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/authtestapp');
const userSchemna=mongoose.Schema({
    userName:String,
    password:String,
    email:String,
    age:Number
});
module.exports=mongoose.model("user",userSchemna);

