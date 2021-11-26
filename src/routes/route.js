const express = require('express');
const router = express.Router();

// ACOUNT CONTROLLER
const accountcontroller=require('../controllers/cryptoController')






// CRYPTOCOIN  API

router.get('/cryptoseparate',accountcontroller.getcryptodetail)


// CRYTOCOIN API DETAIL BY ID
router.get('/highestchange',accountcontroller.getCoin)



module.exports = router