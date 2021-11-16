const express = require('express');
const app = express.Router();
 

const restaurantsList=[{
    name:"haveli",
    id:1,
    rating:4.4,
    address:"orai",
    contact:99,
    products:["x"]
    },{
    name:"jaiswal tower",
    id:2,
    rating:4.9,
    address:"orai",
    contact:88,
    products:["a","b", "q"]
    },
    {
    name:"surya",
    id:3,
    rating:3.4,
    address:"orai",
    contact:74
,products:["s","t"]
    }]
// 1--list of restaurent
app.get('/orairestaurent',function(req,res){
    console.log("Hello");
    res.send(JSON.stringify(restaurantsList, null, 4))
})

// restaurnt add and delete 

app.post('/orairestaurent',function(req,res){
    const newrestaurant = req.body;
    // add new restau in existing list
    // retunrn new restau;
    restaurantsList.push(newrestaurant);
    res.send(newrestaurant);
})

app.delete('/orairestaurent/', function(req, res) {
    const res_id = req.body.id;
    let index = restaurantsList.findIndex(restaurant => restaurant.id === parseInt(res_id));
    restaurantsList.splice(index, 1);
    res.send(restaurantsList);
})

// products of restaurent


app.get('/orairestaurent/:id',function(req,res){
    const res_id=req.params.id
    console.log(res_id);
    // find that id in restau list
    let index = restaurantsList.findIndex(restaurant => restaurant.id === parseInt(res_id));
    console.log(index);
    const products = restaurantsList[index].products;
    console.log(products);
    // find the products it has
    // return the product
    res.send(products);
})

app.post('/orairestaurent/:id',function(req,res){
    const products=req.body.products;
    const res_id = req.params.id;

    let index = restaurantsList.findIndex(restaurant => restaurant.id === parseInt(res_id));
    products.forEach(product => {
        restaurantsList[index].products.push(product);
    }); 
    res.sendStatus(200);
})

// delete api


app.delete('/orairestaurent/:id',function(req,res){
    const products = req.body.products;
    const res_id = req.params.id;
    
    let index = restaurantsList.findIndex(restaurant => restaurant.id === parseInt(res_id));
    products.forEach(product => {
        
        restaurantsList[index].products.splice(products.indexOf(product), 1); 
    })
    
    res.send(restaurantsList[index].products);
})


module.exports = app;
