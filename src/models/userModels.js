const mongoose=require('mongoose')



// HEY MONGOOSE I WANT THIS TYPE OF DATASTRUCTURE SCHEMA
const bookSchema = new mongoose.Schema({
bookname:{type:String, require:true},
ISBN:{type:String,require:true,unique:true},
tags:["string"],
ispublished:{type:Boolean,default:false},
price:{indianprice:String,europeanprice:String},
authorname:{type:String, require:true},
category:{type:String, require:true},
year:{type:Number},
totalpages:{type:Number},
stockavailable:{type:Boolean}    },{timestamps:true})



module.exports=mongoose.model('User', bookSchema );
 
