const express = require('express');
var bodyParser = require('body-parser');
var moment = require('moment');
const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const midglb = function (req, res, next) {
    const ip = req.ip;
    const date = moment().format();
    const api = req.originalurl;
    const location=req.location;
    console.log(ip);
    console.log(date);
    console.log(api);
    console.log(location);
    // LOGIC 
    next()
    

}

app.use(midglb)


const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://user-open-to-all:hiPassword123@cluster0.xgk0k.mongodb.net/ashutosh_pahariya_db?retryWrites=true&w=majority", { useNewUrlParser: true })
    .then(() => console.log('mongodb running and connected'))
    .catch(err => console.log(err))

app.use('/', route);

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});