const object = require ('./hii/logger');
const formattor= require ('./validator/formattor')
const detail=require('./util/date')
const obj=require('underscore')
const search=require('lodash')
// module
console.log('function live')
object.log('radium node batch')
console.log('this is my'+object.newurl)

// module 2
detail.date()
detail.month()
detail.batchinfo()
// module 3
formattor.trimstring()
formattor.changetolowercase()
formattor.changetouppercase()

// npm underscore
console.log(obj.first(["a","b"]))
console.log(obj.last(["a","b"]))

// lodash
console.log(search.chunk(["jan","feb","march","april","may","june"],2))// divide 2 element array pair by 
console.log(search.tail ([2,3,4,5,6,7,8,9])) // remove first element and divide equal
console.log(search.union([2], [1, 2],[3,35],[3,3])) // union property dont repeat the same element and print a all element in a single array
console.log(search.fromPairs([['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island']]))// array change in key and keyvaluepairs
let f1=["horror","The Shining"]
let f2 = ["drama","Titanic"]
let f3=["thriller","Shutter Island"]
let f4=["fantasy","Pans Labyrinth"]
console.log(search.fromPairs([f1,f2,f3,f4]));// FROM PAIR 