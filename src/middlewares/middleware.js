const jwt = require('jsonwebtoken')


let middleware = function (req, res, next) {

    let hello = req.headers['x-auth-token']
    if (!hello) {
        return res.send({ msg: "token was not found" })
    } else {
        let decodetoken = jwt.verify(hello, 'my secret key')


        if (decodetoken) {
        req.decodetoken=decodetoken

            next()
        } else {
            res.send({ msg: "token is not valid" })
        }
    }


}

module.exports.middleware = middleware