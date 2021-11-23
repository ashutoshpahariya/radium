const orderModel=require('../models/orderModel')
const userModel=require('../models/userModel')
const productModel = require("../models/productModel.js")



const getcreateorder=async function(req,res){
const userId = req.body.user
const productId = req.body.product
const uId = await userModel.findById(userId)
const pId = await productModel.findById(productId)


if (uId) {
  if(pId){
    let savedBook = await orderModel.create(book);
    res.json(savedBook );
  }else{
    res.json("user id is not valid")
  }
} else {
  res.json( "product id is not valid" );
}
};


module.exports.getcreateorder=getcreateorder
