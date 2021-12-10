const internModel = require('../model/internModel')
const collegeModel = require("../model/collegeModel");

//------------------ISVALID   REQUESTBODY FUNCTION
const isValidRequestBody = function (requestBody) {
    return Object.keys(requestBody).length > 0
}
//-----------------------------ISVALID   FUNCTION
const isValid = function (value) {
    if (typeof value === 'undefined' || value === null) return false
    if (typeof value === 'string' && value.trim().length === 0) return false
    return true;
}


//----------------SECOND API CREATE INTERN 
const createintern = async function (req, res) {
    try {
        res.setHeader('Access-Control-Allow-Origin', '*')
        const requestBody = req.body;

        if (!isValidRequestBody(requestBody)) {
            res.status(400).send({ status: false, message: 'Invalid request parameters. Please provide intern details' })
            return
        }
        //  EXTRACT PARAMS
        const { name, email, mobile, collegeName } = requestBody;

        //  VALIDATION
        if (!isValid(name)) {
            res.status(400).send({ status: false, message: 'Intern name is required' })
            return
        }
        if (!isValid(email)) {
            res.status(400).send({ status: false, message: 'Intern email is required' })
            return
        }
        if (!(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(email))) {
            res.status(400).send({ status: false, message: `Email should be a valid email address` })
            return
        }
        const isEmailAlreadyUsed = await internModel.findOne({ email })
        if ((isEmailAlreadyUsed)) {
            res.status(400).send({ status: false, message: "Email is already used, try different one" })
            return
        }
        if (!isValid(mobile)) {
            res.status(400).send({ status: false, message: 'Intern mobile is required' })
            return
        }
        if (!(/^[6-9]\d{9}$/.test(mobile))) {
            res.status(400).send({ status: false, message: `Mobile number should be a valid number` })
            return
        }
        const ismobileAlreadyUsed = await internModel.findOne({ mobile })
        if ((ismobileAlreadyUsed)) {
            res.status(400).send({ status: false, message: "mobile is already used, try different one" })
            return

        }
        if (!isValid(collegeName)) {
            res.status(400).send({ status: false, message: '  intern College name is required' })
            return
        }
        // FIND COLLEGE NAME IN COLLEGE MODEL
        const collegenameDetails = await collegeModel.findOne({ name: collegeName, isDeleted: false })
        if (!collegenameDetails) {
            res.status(404).send({ status: false, message: "No college exist with this name" })
            return
        }
        // COLLEGEID===COLLEGENAME
        const collegeId = collegenameDetails["_id"]

        // EXTRACT INTERN PARAMS
        const interndata = { name, email, mobile, collegeId };
        // CREATE INTERN DATA
        const newIntern = await internModel.create(interndata)
        res.status(201).send({ status: true, message: 'New Intern created successfully', data: newIntern })
    } catch (error) {
        console.log(error)
        res.status(500).send({ status: false, message: error.message });
    }
}
module.exports.createintern = createintern

