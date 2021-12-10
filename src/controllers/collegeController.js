const collegeModel = require("../model/collegeModel");
const internModel = require('../model/internModel')


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
// ---------------------FIRST API REGISTER COLLEGE
const registercollege = async function (req, res) {
    try {

        const requestBody = req.body;
        console.log(requestBody)
        if (!isValidRequestBody(requestBody)) {
            res.status(400).send({ status: false, message: 'Invalid request parameters. Please provide college details' })
            return
        }
        // EXTRACT PARAMS
        const { name, fullName, logoLink } = requestBody;

        // VALIDATION
        if (!isValid(name)) {
            res.status(400).send({ status: false, message: 'name is required' })
            return
        }
        const isnameAlreadyUsed = await collegeModel.findOne({ name })
        if (isnameAlreadyUsed) {
            res.status(400).send({ status: false, message: "name is already used, try different one" })
            return
        }
        if (!isValid(fullName)) {
            res.status(400).send({ status: false, message: 'fullName is required' })
            return
        }
        if (!isValid(logoLink)) {
            res.status(400).send({ status: false, message: 'logoLink is required' })
            return
        }
        // AFTER VALIDATION CREATE COLLEGE DATA

        const collegeData = { name, fullName, logoLink }
        const newcollege = await collegeModel.create(collegeData);

        res.status(201).send({ status: true, message: `college created successfully`, data: newcollege });
        return
    } catch (error) {
        res.status(500).send({ status: false, message: error.message });
    }
}
module.exports.registercollege = registercollege


//------------------GET ALL INTERN DETAIL BY COLLEGE NAME
const alldetails = async function (req, res) {
    try {
        res.setHeader('Access-Control-Allow-Origin', '*')
       
        let temp = await collegeModel.findOne({ name: req.query.collegeName, isDeleted: false })

        if (!temp) {
            res.status(400).send({ status: false, err: "Invalid parameters: Provide a valid college an abbreviation" })
        }
        else {
            let ID = temp._id
            let data = temp
            let interns = await internModel.find({ collegeId: ID  ,isDeleted:false}).select({ _id: 1, name: 1, email: 1, mobile: 1 })

            if (!interns) {
                res.status(400).send({ status: false, msg: "No Interns applied for an internship" })
            }

            else {

                let details = { name: data.name, fullname: data.fullName, logolink: data.logoLink, interests: interns }


                res.status(200).send({ status: true, data: details })
            }

        }
    }

    catch (err) {
        res.status(500).send({ status: false, message: err.message });

    }
}
module.exports.alldetails = alldetails




































