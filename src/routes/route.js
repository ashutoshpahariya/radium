

const express = require('express');

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever apix!')

});

router.get('/colors', function (req, res) {
    res.send('this is another api!')
});

//1-->Create an endpoint for GET /movies that returns a list of movies. 
//Define an array of movies in your code and return the value in response.

router.get('/movies', function (req, res) {
    const arr=["DDLJ","Phir Hera Pheri"]
    res.send(arr)
});

//2-->Create an endpoint GET movies/indexNumber (For example GET /movies/1 is 
//a valid request and it should return the movie in your array at index 1). 
//You can define an array of movies again in your api

//3-->Handle a scenario in problem 2 where if the index is greater than the valid
// maximum value a message is returned that tells the user to use a valid index in an error message.

router.get('/movies/:index', function (req, res) {
    const arr=["shole","ram lakhsman","spider man","super man","wonder women"]
    const val=req.params.index
    //console.log(val)
    if(val>arr.length-1 ){
        res.send("index is out of range")
    }else{
    res.send(arr[val])
    }
});


//4-->Write another api called GET /films. Instead of an array of strings define an array of
 //movie objects this time. Each movie object should have values - id, name
 //Return the entire array in this api’s response

router.get('/films', function (req, res) {
    const arrx=[ {
        'id': 1,
        'name': 'The Shining'
       }, {
        'id': 2,
        'name': 'Incendies'
       }, {
        'id': 3,
        'name': 'Rang de Basanti'
       }, {
        'id': 4,
        'name': 'Finding Demo'
       }]
    res.send(arrx)
});
module.exports = router;