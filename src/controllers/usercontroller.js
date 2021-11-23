
const userModel=require('../models/userModel')

const getcreateuser=async function(req,res){
let data=req.body
let value=req.headers.isfreeapp
value=data.isfreeapp
let saveddetail=await userModel.create(data)
res.json(saveddetail)

}


module.exports.getcreateuser=getcreateuser