const express=require('express')

const mongoose=require('mongoose')

const todo=require("./models/todo")
const path = require("path");


const app=express()

app.use(express.json());

app.use(express.static(path.join(__dirname, "../public")));
const port=3000
mongoose.connect("mongodb://127.0.0.1:27017/todos")
    .then(() => {
        console.log("MongoDB connected ✅");
    })
    .catch((err) => {
        console.log("MongoDB connection error ❌");
        console.log(err);
    });

app.post('/messages',async(req,res)=>{
    const newmessage=await todo.create({
        message:req.body.message
    });
    res.json(newmessage)
})
app.get('/messages',async(req,res)=>{
    const messages = await todo.find();
    res.json(messages);
})

app.listen(port,()=>{
   console.log(`app`)
})