const express = require('express');
const router = express.Router();
const middle=require('../middlewares/middleware');


// ACOUNT CONTROLLER
const accountcontroller=require('../controllers/accountController')



// assignment account api
router.post('/create_acc',accountcontroller.getcreate_acc)


// assignment second api
router.post('/login',accountcontroller.userlogin)



// assignment third api
 router.get('/userdetail/:userid',middle.middleware, accountcontroller.getuserdetail)

 //assignment fourth api
 router.put('/users/:userid',middle.middleware, accountcontroller.updatedetails)

module.exports = router;

