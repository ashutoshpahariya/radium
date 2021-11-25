const express = require('express');
const router = express.Router();

// ACOUNT CONTROLLER
const accountcontroller=require('../controllers/accountController')


 //FIRST COWIN API 
 router.get('/cowindetail',accountcontroller.getcowindetail)

 //SECOND COWIN API 
 router.get('/cowindistrict/:stateid',accountcontroller.getcowindistrict)

//THIRD COWIN API 
router.get('/cowinslot',accountcontroller.detailpindate)

// FOURTH COWIN API
router.post('/cowingenerateotp',accountcontroller.getcowingenerateotp)

// FIFTH COWIN API
router.post('/confirmotp',accountcontroller.getconfirmotp)



// WEATHER ASSIGNMENT FIRST API
router.get('/londonweather',accountcontroller.getlondonweather)


// WEATHER ASSIGNMENT SECOND API
router.get('/changetemp',accountcontroller.getchangetemperature)

// WEAther assignment third api
router.get('/tempdetail',accountcontroller.gettempdetail)


module.exports = router