const accountModel = require('../models/accountcreatemodel');
const jwt = require('jsonwebtoken');


const getcreate_acc = async function (req, res) {
    let ac = req.body
    let acc = await accountModel.create(ac)
    res.json(acc)
}

// second api
const userlogin = async function (req, res) {

    if (req.body && req.body.name && req.body.password) {
        let user = await accountModel.findOne({ name: req.body.name, password: req.body.password, isdeleted: false })
        if (user) {

            let payload = { _id: user._id }
            let token = jwt.sign(payload, 'my secret key')
            res.header('x-auth-token', token)
            res.send({ status: true, data: user._id, token: token })
        }
        else {
            res.send({ msg: "user name and password not found" })
        }
    }
    else {

        res.send({ msg: "details not foumd" })

    }

}

    ;

// THIRD API LOGIC
const getuserdetail = async function (req, res) {
    let identity = req.params.userid
        if (req.decodetoken._id ==  req.params.userid) {

            let detail = await accountModel.findOne({ _id: identity, isdeleted: false })
            if (detail) {
                res.send({ status: true, data: detail })
            } else {
                res.send({ status: false, data: "user not found" })
            }

        }

    
}



// FOURTH API LOGIC
const updatedetails = async function (req, res) {
    let identity = req.params.userid
    let emailupdate = req.body.email

    if(req.decodetoken._id === identity){
        let detail = await accountModel.findOneAndUpdate({ _id: identity }, { $set: { email: emailupdate } }, { new: true })


        if (detail) {
            res.send({ status: true, data: detail })
        } else {
            res.send({ status: false, data: "user not found" })
        }
    
    }else{
res.send({msg:"token id and param id does not match"})


    }
    
}


module.exports.getcreate_acc = getcreate_acc
module.exports.userlogin = userlogin
module.exports.getuserdetail = getuserdetail
module.exports.updatedetails = updatedetails