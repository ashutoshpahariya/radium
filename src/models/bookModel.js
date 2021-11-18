const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema= new mongoose.Schema({


    bookName: {
        type: String,
        required: true
    },
    author: {
        type: ObjectId,
        ref: 'myAuthor'
    },
    prices: Number,
    ratings: Number,

    publisher: {
        type: ObjectId,
        ref: 'myPublisher'
    },

}, {timestamps: true} )

module.exports = mongoose.model( 'myBook', bookSchema ) 

