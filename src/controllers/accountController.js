const accountModel = require('../models/accountcreatemodel')

const getcreate_acc = async function (req, res) {
    let ac = req.body
    let acc = await accountModel.create(ac)
    res.json(ac)
}




const getlogin = async function (req, res) {
    let userName = req.body.name
    let userpassword = req.body.password

    let credentials = await userModel.findOne({ userName:name ,userpassword:password ,isDeletedflag:false})
    if (credentials) {
        res.send({ status:true,data:credentials})
    } else {
        res.send({ msg: "user name and password not found" })
    }

};


const getuserdetail = async function (req, res) {
    let detail = req.params
    let id = await accountModel.findById('_id')
    if (_id) {
        res.json()
    } else {
        ({
            status: false,
            msg: "sorry not found details"
        })

    }

}
module.exports.getcreate_acc = getcreate_acc
module.exports.getlogin = getlogin
module.exports.getuserdetail = getuserdetail