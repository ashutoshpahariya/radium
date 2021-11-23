const express = require('express');
const router = express.Router();
const productController= require("../controllers/productController");
const userController=require("../controllers/usercontroller");
const middlewaredata  = require('../middlewares/middleware');
const orderController=require('../controllers/ordercontroller')




// middle ware question 1
router.post('/createproduct',productController.getcreateproduct)


// middle ware question 2
router.post('/createuser',middlewaredata.middleware,userController.getcreateuser)


// middle ware question 3
router.post('/createorder',orderController.getcreateorder)

module.exports = router;

