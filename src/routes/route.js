const express = require('express');
const router = express.Router();
const controller = require('../controllers/collegeinternController')


router.post('/functionup/colleges',controller.registercollege)

router.post('/functionup/interns',controller.createintern)

router.get('/functionup/collegeDetails',controller.alldetails)

module.exports = router


