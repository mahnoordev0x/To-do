const mongoose=require('mongoose')

const todoschema=new mongoose.Schema({
    message:String
})
const todo=mongoose.model("todo",todoschema)
module.exports=todo