let middleware = function (req, res, next) {
    let apptypeheader = req.headers['isfreeapp']
    console.log(typeof apptypeheader)
    let isAppFree
    if (!apptypeheader) {
        return res.json('MANDATORY HEADER MISSING')
    } if (apptypeheader === 'false') {
        isAppFree = false
    } else {
        isAppFree = true
    }
    req.isFreeAppUser = isAppFree
    next()
}



module.exports.middleware = middleware