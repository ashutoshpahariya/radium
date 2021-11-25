const axios = require('axios');

//COWIN CONTROLLER FIRST API
const getcowindetail = async function (req, res) {
    const cowin = await axios.get("https://cdn-api.co-vin.in/api/v2/admin/location/states")
    res.json(cowin.data)

}

//SECOND COWIN API GET DISTRICT DETAIL


const getcowindistrict = async function (req, res) {
    let id = req.params.stateid
    let options = {
        method: "get",
        url: "https://cdn-api.co-vin.in/api/v2/admin/location/districts/" + id
    }

    const districtdetails = await axios(options);
    let district = districtdetails.data
    res.status(200).send({ data: district })

}



//THIRD COWIN API BY DATE AND PIN


let detailpindate = async function (req, res) {

    let pincode = req.query.pincode
    let date = req.query.date
    let options = {
        method: "get",
        url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pincode}&date=${date}`
    }
    let areadetail = await axios(options)
    let area = areadetail.data
    res.status(200).send({ data: area })

}

// FOURTH COWIN API GENERATE OTP

let getcowingenerateotp = async function (req, res) {

    let options = {
        method: "post",
        url: "https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP",
        data: {
            "mobile": req.body.mobile

        }
    }
    let number = await axios(options)
    let secretotp = number.data
    res.status(200).send({ data: secretotp })

}


// FIFTH COWIN API CONFIRM OTP
let getconfirmotp = async function (req, res) {

    let otp = req.body.otp
    let transaction = req.body.txnId
    let options = {
        method: "post",
        url: "https://cdn-api.co-vin.in/api/v2/auth/public/confirmOTP",
        data: { "otp": otp, "txnId": transaction }
    }
    let password = await axios(options)
    let passwordotp = password.data
    res.status(200).send({ data: passwordotp })

}

// ASSIGNMENT WEATHER API FIRST LONDON WEATHER
const getlondonweather = async function (req, res) {
    let q = req.query.city
    let token = req.query.token
    let options = {
        method: "get",
        url: `http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${token}`

    }

    let london = await axios(options)
    let fulldetail = london.data
    res.status(200).send({ detail: fulldetail })
}

// SECOND API UPDATE TEMPERATURE OF LONDON
const getchangetemperature = async function (req, res) {

    let options = {
        method: "get",
        url: "http://api.openweathermap.org/data/2.5/weather?q=London&appid=8ee2532df96f9db9bc240e470d9ab399"
    }


    let london = await axios(options)


    let fulldetail = london.data.main.temp
    let arr = []
    arr.push({
        "city": "london",
        "temp": fulldetail
    })
    res.status(200).send({ detail: arr })
}

// THIRD API PRINT TEMP IN SORT 
const gettempdetail= async function (req, res) {
    try {
        let city =  ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"] 
        let id = req.query.appid;
        let tempratureArray = []
        let options
        console.log('hii')
        for (let i = 0; i < city.length; i++) {
            console.log('hy')
            options = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${city[i]}&appid=${id}`,
            }
            console.log('h')
            let response = await axios(options);
            console.log(response)
            tempratureArray.push({ "city": city[i], "temp": response.data.main.temp })
        }
    
        tempratureArray.sort(function (a, b) { return parseFloat(a.temp) - parseFloat(b.temp) })
        res.status(200).send({ message: "Data fetch successfully", data: tempratureArray })
    } catch (error) {
        res.status(500).send({ msg: "failed to fetch data", error: error.message })
    } console.log('heee')
};



module.exports.getcowindetail = getcowindetail
module.exports.getcowindistrict = getcowindistrict
module.exports.detailpindate = detailpindate
module.exports.getcowingenerateotp = getcowingenerateotp
module.exports.getconfirmotp=getconfirmotp
module.exports.getlondonweather=getlondonweather

module.exports.getchangetemperature = getchangetemperature
module.exports.gettempdetail = gettempdetail