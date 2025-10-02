const express=require('express');
const app= express();
const cookieParser=require('cookie-parser');
app.use(cookieParser());
const bcrypt=require('bcrypt');
app.get('/',(req,res)=>{
    bcrypt.compare("harsh","$2b$10$2mMOtUKYsds6OZktbSkPM.6VagVv2HBIP0KtMGapxpV97VNZo6xta",function(err,result){
        console.log(result);
    });
    res.cookie("name","harsh");
    res.send("done");
    
});

app.listen(3000);