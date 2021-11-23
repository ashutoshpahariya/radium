let middleware=function(req,res,next){
let data=req.headers.isfreeapp
console.log(typeof data)
if(data==='true'){ 
     next() }else{
         res.json('req is missing a mandatory header')
     }
    
}



module.exports.middleware=middleware