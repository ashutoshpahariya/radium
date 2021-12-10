const express = require('express');
const router = express.Router();
const collegecontroller = require('../controllers/collegeController')
const interncontroller=require('../controllers/internController')


router.post('/functionup/colleges',collegecontroller.registercollege)


router.post('/functionup/interns',interncontroller.createintern)


router.get('/functionup/collegeDetails',collegecontroller.alldetails)


module.exports = router


