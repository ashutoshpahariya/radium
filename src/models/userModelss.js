const mongoose=require('mongoose')

const authorsSchema= new mongoose.Schema({
    author_id:{type:Number ,require:true},
    author_name:{type:String},
    age:{type:Number},
address:{type:mongoose.Schema.Types.Mixed},
price:{type:Number}
},{timestamps:true})
module.exports=mongoose.model('Author',authorsSchema)



