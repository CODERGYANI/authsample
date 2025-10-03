const express=require('express');
const app= express();
const userModel=require("./models/user");
const cookieParser=require('cookie-parser');
app.use(cookieParser());
app.set("view engine",'ejs');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const path=require('path');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.get('/',(req,res)=>{
    res.render("index");
})
app.post('/create',async (req,res)=>{
    let {Name,email,password,age}=req.body;
    bcrypt.genSalt(10, (err,salt)=>{
    bcrypt.hash(password,salt,async (err,hash)=>{
        let created =await userModel.create({
        Name,
        password: hash,
        email,
        age
    })
    let tokken=jwt.sign({email},"shh");
    res.cookie("token",tokken);
    console.log(password);
     res.send(created); 
    });


    }); 
});
app.get('/logout',(req,res)=>{
    res.cookie("token","");
    res.redirect("/");


})

app.listen(3000);