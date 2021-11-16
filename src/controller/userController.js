const express=require('express')
const routers=express.Router();


const UserModel=require("../models/userModels.js")


//// GET USER DATA BY A USER
/// UserModel use bcoz it is a variable name 
/// if variable name different usermodel name different

const getbookdata= async function (req,res){
    var data=req.body
    let alldata=await UserModel.create(data)
    res.json(alldata)
}


// GET BOOK LIST BY BOOKNAME AND AUTHORNAME
const getbooklist= async function(req,res){
    let savedData=await UserModel.find().select({bookname:1,authorname:1})
    res.json(savedData)
}


// BOOK IN YEAR

const getbookinyear=async function(req,res){
    let bookyear=await UserModel.find({ispublished:true})
res.json(bookyear)

}


// PARTICULAR BOOK
const getparticularbook=async function(req,res){
    let pbook=await UserModel.find(req.body)

    res.json(pbook)
}


// XIN BOOKS

const getXINbooks=async function(req,res){
    let currencybook=await UserModel.find({'price.indianprice':{$in:["100INR","200INR","500INR"]}})
    res.json(currencybook)
}


// GET RANDOM BOOKS


const getrandombooks=async function(req,res){
    let rbook=await UserModel.find({$or:[{stockavailable:true},{totalpages:{$gt:500}}]})
    res.json(rbook)
}







module.exports.getbookdata=getbookdata
module.exports.getbooklist=getbooklist
module.exports.getbookinyear=getbookinyear
module.exports.getparticularbook=getparticularbook
module.exports.getXINbooks=getXINbooks
module.exports.getrandombooks=getrandombooks












