const express = require('express');
const router = express.Router();
const productController= require("../controllers/productController");
const userController=require("../controllers/usercontroller");
const middlewaredata  = require('../middlewares/middleware');
const orderController=require('../controllers/ordercontroller')

// ACOUNT CONTROLLER
accountcontroller=require('../controllers/accountController')



// middle ware question 1
router.post('/createproduct',productController.getcreateproduct)


// middle ware question 2
router.post('/createuser',middlewaredata.middleware,userController.getcreateUser)


// middle ware question 3
router.post('/createorder', middlewaredata.middleware,orderController.getcreateorder)



// assignment account api
router.post('/create_acc',accountcontroller.getcreate_acc)


router.post('/login',accountcontroller.getlogin)


router.get('/userdetail',accountcontroller.getuserdetail)


module.exports = router;

