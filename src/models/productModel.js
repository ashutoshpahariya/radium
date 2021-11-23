const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({
    Name: String,
    category: String,
    price:{ type:Number,require:Boolean }
}, {timestamps: true} )

module.exports = mongoose.model( 'myProduct',productSchema )



