const express=require('express');
const app= express();
const cookieParser=require('cookie-parser');
app.use(cookieParser());
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

/*app.get('/',(req,res)=>{
    bcrypt.compare("harsh","$2b$10$2mMOtUKYsds6OZktbSkPM.6VagVv2HBIP0KtMGapxpV97VNZo6xta",function(err,result){
        console.log(result);
    });
    res.cookie("name","harsh");
    res.send("done");
    
});*/
app.get('/',(req,res)=>{
    let token=jwt.sign({email:"nitesh@gmail.com"},"secret")
    console.log(token);
    res.cookie("token",token);
    res.send("done");
    
    
});
app.get('/verify',(req,res)=>{
    let token=req.cookies.token;
    console.log(token);
    let data=jwt.verify(req.cookies.token,"secret");
    console.log(data);

});


app.listen(3000);