require('../../../config/db.config')
const mongoose=require('mongoose')
const {Schema}=mongoose

const userStructrure=new Schema({
name:String,
email:String,
password:String,
phoneNumber:Number
})

module.exports=mongoose.model('userdetails',userStructrure)