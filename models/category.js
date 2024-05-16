const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({
    name : {
        type : String,
        required : [true, 'Please enter a category...']
    },
    createdAt : {
        type : Date,
        default : Date.now
    },
    updatedAt : {
        type : Date,
        default : Date.now
    }
})

const Category = mongoose.model('Category', categorySchema)
module.exports = Category