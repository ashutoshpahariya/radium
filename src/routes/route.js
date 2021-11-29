const express = require('express');
const router = express.Router();


const accountcontroller=require('../controllers/authorController')



// FIRST API
 router.post('/createauthor',accountcontroller.getcreateauthor)

 // SECOND API
router.post('/createblog',accountcontroller.getcreateblog)

// THIRD API
router.get('/blogs',accountcontroller.getblogs)


//FOURTH API
router.put('/blogs/:blogId',accountcontroller.updateblog)


 module.exports = router

