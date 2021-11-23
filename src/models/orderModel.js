const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema= new mongoose.Schema({
    userid:{type:ObjectId,ref:'myUser'},
    productid:{type:ObjectId,ref:'myProduct'},
amount:Number,
isFreeAppUser:Boolean,
date:{type:Date} },{timestamps: true} )

module.exports = mongoose.model( 'myOrder', orderSchema ) 
