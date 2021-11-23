const productModel = require("../models/productModel.js")

//problem 1
const getcreateproduct = async function (req, res) {
    var data = req.body
    let savedData = await productModel.create(data)
    res.send({ msg: savedData })
}
module.exports.getcreateproduct = getcreateproduct