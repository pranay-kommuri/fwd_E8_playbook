const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const port = 3019

const app = express();
app.use(express.static(__dirname));
app.use(express.urlencoded({extended:true}));

mongoose.connect('mongodb://127.0.0.1:27017/playbookusers')
const db = mongoose.connection
db.once('open',()=>{
    console.log("Mongodb connection successful")
})

const userSchema = new mongoose.Schema({
    username:String,
    email:String,
    password:String
})

const Users = mongoose.model("data",userSchema)

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})

app.post('/signup',async (req,res)=>{
    const {username,email,password} = req.body
    const user = new Users({
        username,
        email,
        password
    })
    await user.save()
    console.log(user)
    res.send("Sign up successful")
})

app.listen(port,()=>{
    console.log("Server started")
})