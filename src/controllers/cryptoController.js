const axios = require('axios');
const cryptoModel = require('../model/crptomodel')

// FIRST API OF CRYPTO DETAIL
const getcryptodetail = async function (req, res) {
    // FIND ALL THE DATA OF CRYPTO DETAIL
    let option = {
        method: "get",
        url: "http://api.coincap.io/v2/assets",
        headers: {
            'Authorization': 'Bearer 2caa952c-b6d0-40f0-9703-7d1cf1b17e3e'
        }
    }
    // HERE WE GO ALL INDEX BY A LOOP 
    // THEN GET DETAIL WHAT I WANT 
    // SYMBOL , NAME , MARKETCAPUSD , PRICEUSD
    let response = await axios(option)
    let list = response.data.data
    for (i in list) {

        let cryptoData = {
            symbol: list[i].symbol,
            name: list[i].name,
            marketCapUsd: list[i].marketCapUsd,
            priceUsd: list[i].priceUsd
        }
        let cryptoStrucure = await cryptoModel.create(cryptoData)
    }
    // HERE WE DO A FIND A NAME AND CHANGEPERCENT 24 HOUR 
    // THEN PUT A SORT PROPERTY TO VISIBLE A DATA INCREASING ORDER
    let final = []
    for (i in list) {
        final.push({ "name": list[i].name, "changePercent24Hr": list[i].changePercent24Hr })
    }
    let hrChanges = final.sort(function (a, b) { return b.changePercent24Hr - a.changePercent24Hr })

    res.status(200).send({ status: true, Data: hrChanges })

}





///FIND DETAIL BY ID
const getCoin = async function (req, res) {

    try {
        let id = req.query.id
        let option = {
            method: "get",
            url: `http://api.coincap.io/v2/assets/?id${id}`,
            headers: {
                'Authorization': 'Bearer 2caa952c-b6d0-40f0-9703-7d1cf1b17e3e'
            }

        }
        let response = await axios(option)
        let list = response.data.data
        for (i in list) {
            if (list[i].id === id) {
                res.send({ status: true, data: list[i] })
            } else {
                res.send({ status: false, message: "nos such id" })
            }
        }
    } catch (err) {
        res.status(500).send({ status: true, msg: err.message })
    }
}






module.exports.getcryptodetail = getcryptodetail
module.exports.getCoin = getCoin