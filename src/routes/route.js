const express = require('express');
const router = express.Router();
const Controller=require('../controller/userController');


/// TESTING API
router.get('/test-me', function (req, res) {
    res.send('My first ever apix!')

});


//// FIRST ASSIGNMENT MONGOOSE API

router.post('/bookData',Controller.getbookdata);
router.get('/booklist',Controller.getbooklist);


/// SECOND ASSIGNMENT MONGOOSE API

router.get('/bookinyear',Controller.getbookinyear);

router.post('/particularbooks',Controller.getparticularbook);

router.get('/XINbooks',Controller.getXINbooks);

router.get('/randombooks',Controller.getrandombooks);



// SECOND ASSIGNMENT API


router.post('/authordetails',Controller.getauthordetails)


router.get('/authorname',Controller.getauthornamedetails)


router.get('/updatedetail',Controller.getupdatedetails)



router.get('/responsedetail',Controller.getresponsedetails)

















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




// PROBLEM--1 Write a GET api to fetch specific movies (path -> /specific-movies) with the help of query params - rating and genre

//Your movie collection is an array of movie objects. Following is an example of a movie object.


router.get('/specific-movies', function (req, res) {

    let moviesArr =   [ 
        { 'id': '1', 'name':'The Shining', 'rating': '1','director': 'Stanley Kubrik',
      'genre': 'horror'   },
  { 'id': '2', 'name': 'Incendies', 'rating': '8', 'director': 'abc','genre': 'horror'},
   {'id': '3', 'name': 'om','rating': '9','director': 'jai','genre': 'family'},                       
  {'id':'4','name': 'ram','rating':'10','director':'shyam','genre':'comedy' },
  {'id':'5','name': 'raju','rating':'6','director':'mohan','genre':'action' }
  ]
  
  const a=req.query.rating
  const b=req.query.genre
  const movies = moviesArr.filter(movie=>movie.rating==a && movie.genre==b)
     res.send({"movies":movies})
  });
  
  
  // PROBLEM--2  
  //Write a POST api to add a movie to the movies collection (path -> /specific-movies ).
  //You have to make sure you provide all the details of the movie in the request at Postman 
  //(movie details must have an id, name, rating, director and genre) 
  // as well as that you return the updated array in the response
  
  
  
  let moviesArr =   [ 
    { 'id': '1', 'name':'The Shining', 'rating': '1','director': 'Stanley Kubrik',
  'genre': 'horror'   },
  { 'id': '2', 'name': 'Incendies', 'rating': '8', 'director': 'abc','genre': 'horror'},
  {'id': '3', 'name': 'om','rating': '9','director': 'jai','genre': 'family'},                       
  {'id':'4','name': 'ram','rating':'10','director':'shyam','genre':'comedy' },
  {'id':'5','name': 'raju','rating':'6','director':'mohan','genre':'action' }
  ]
  router.post('/specific-movies', function (req, res){
    const updateArray=req.body
    moviesArr.push(updateArray)
    console.log(updateArray)
    res.send(moviesArr)
  });
  
  
  
  // PROBLEM--3 Write a GET api (path -> /best-movie) that returns only one movie that has the highest rating in the collection. 
  // In case there are multiple movies with the highest rating value, return any one out of those.
  
  router.get('/best-movie',function(req,res){
  
    let moviesArr =   [ 
      { 'id': '1', 'name':'The Shining', 'rating': 1,'director': 'Stanley Kubrik',
    'genre': 'horror'   },
    { 'id': '2', 'name': 'Incendies', 'rating': 8, 'director': 'abc','genre': 'horror'},
    {'id': '3', 'name': 'om','rating': 9,'director': 'jai','genre': 'family'},                       
    {'id':'4','name': 'ram','rating':10,'director':'shyam','genre':'comedy' },
    {'id':'5','name': 'raju','rating':6,'director':'mohan','genre':'action' }
    ]
  let highrating=moviesArr[0].rating
  let index=0;
    for(let i=1;i<moviesArr.length;i++){
      if(moviesArr[i].rating>highrating){
        highrating=moviesArr[i].rating
        index=i;
      }
    }
    res.send(moviesArr[index])
  })
  
  
  //    PROBLEM---4  For this problem you don’t have to write a new api you have to update the logic in problem 2’s api.
  //This time you must check the value of rating as well the value of director in the request.
  // If the rating has value greater than 10, return a message in the response informing that the maximum value a rating can have is 10.
   // If the director value is not present in the request you have to return a message in the response informing the director value must be present.
  //In case both the problems exist for example the data 




  let moviesArra =   [ 
    { 'id': '1', 'name':'The Shining', 'rating': 1,'director': 'Stanley Kubrik',
  'genre': 'horror'   },
  { 'id': '2', 'name': 'Incendies', 'rating': 8, 'director': 'abc','genre': 'horror'},
  {'id': '3', 'name': 'om','rating': 9,'director': 'jai','genre': 'family'},                       
  {'id':'4','name': 'ram','rating':10,'director':'shyam','genre':'comedy' },
  {'id':'5','name': 'raju','rating':6,'director':'mohan','genre':'action' }
  ]
  router.post('/specific-moviesss', function (req, res){
    const updateArray=req.body
  if(updateArray.rating>10 && !updateArray.hasOwnProperty("director")){
    res.send("Invalid Rating and No director value present")
}else if(updateArray.rating>10 || !updateArray.hasOwnProperty("director")){
    if(updateArray.rating>10){
        res.send("Invalid Rating")
    }else{
        res.send("No director")
    }
}else{
moviesArra.push(updateArray)
res.send(moviesArra)
}
});



//PROBLEM 1---->MATH PLAYERS COLLECTION
//Write a POST /players api that saves a player’s details and doesn’t allow saving the data of a player
// with a name that already exists in the data


let playerArray=[]
router.post('/players', function(req, res){
   let playerAdd=req.body
   for(let i=0;i<playerArray.length;i++){
       if(playerArray[i].name==playerAdd.name){
           res.send({"msg":"Player already exist"});
       }
   }
   playerArray.push(playerAdd)
   res.send({"msg":"Player added succesfully"})

});



//PROBLEM 2----->BOOKING IN PLAYER COLLECTION


let playersArray=[{
  "name":"manish",
  "dob":"1/1/1995",
  "gender":"male",
  "city":"jalandhar",
  "sports":["swimming"],
  "booking":[]
},
{
  "name":"seema",
  "dob":"3/2/2000",
  "gender":"female",
  "city":"vanaras",
  "sports":["kho kho"],
  "booking":[]
}]

router.post('/players/:playerName/bookings/:bookingId', function(req, res){
 
     let checkName=req.params.playerName
     let checkId=req.params.bookingId
     let bookingDetails=req.body
     for(let i=0;i<playersArray.length;i++){
         if(playersArray[i].name==checkName){

             for(let j=0;j<playersArray[i].booking.length;j++){
                 if(playersArray[i].booking[j].bookingNumber==checkId){
                     res.send({"msg":"Booking already processed"})
                 }
             }
             playersArray[i].booking.push(bookingDetails)
             res.send({"msg":"Booking Done"})   
         }
     }

     res.send({"msg":"Player not found"})
});



module.exports = router;






















