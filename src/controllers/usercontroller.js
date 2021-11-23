 const userModel=require('../models/userModel')
 
 const getcreateUser = async function (req, res) {
  let data= req.body
   //data["freeAppUser"]=req.headers["isfreeapp"];
  data["freeAppUser"]=req.isFreeAppUser;
  let savedData= await userModel.create(data)
  res.send({msg: savedData}) 
};

module.exports.getcreateUser=getcreateUser
