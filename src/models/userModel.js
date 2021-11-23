const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
name: String,
	balance:Number, // Default balance at user registration is 100
	address:String,
	age: Number,
 	gender:{type:String,enum:["male","female","other"], // Allowed values are - “male”, “female”, “other”
freeappuser:{type:Boolean,default:false}
}}, {timestamps:true} )

module.exports = mongoose.model( 'myUser',userSchema )
