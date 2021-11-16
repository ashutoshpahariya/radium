const express=require('express')
const routers=express.Router();


const UserModel=require("../models/userModels.js")
const AuthorModel=require("../models/userModelss")

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





// SECOND ASSIGNMENT AUTHOR NAME

//  FIND AUTHOR DETAIL

const getauthordetails=async function(req,res){
let alldetail=await AuthorModel.create(req.body)
res.json(alldetail)
}

//  FIND AUTHOR NAME DETAILS

const getauthornamedetails=async function(req,res){
    let namedetail=await AuthorModel.find({author_name:"chetan bhagat"})
    res.json(namedetail)
}

// UPDATE BOOK PRICE
const getupdatedetails=async function(req,res){
    let udetail=await AuthorModel.find({author_name:"two states"},{$set:{price:100}})
}

// fIND COST AND UPDATE POSTMAN RESPONSE

const getresponsedetails=async function(req,res){
    let rdetail=await AuthorModel.find({$and:[{price:{$gt:50}},{price:{$lt:100}}]},{$set:{author_name:"baghban"}},{new:true})
    res.json(rdetail)
}



// ASSIGNMENT ONE EXPORT


module.exports.getbookdata=getbookdata
module.exports.getbooklist=getbooklist
module.exports.getbookinyear=getbookinyear
module.exports.getparticularbook=getparticularbook
module.exports.getXINbooks=getXINbooks
module.exports.getrandombooks=getrandombooks


// ASSIGNMENT TWO EXPORT

module.exports.getauthordetails=getauthordetails
module.exports.getauthornamedetails=getauthornamedetails
module.exports.getupdatedetails=getupdatedetails
module.exports.getresponsedetails=getresponsedetails








