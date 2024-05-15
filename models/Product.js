const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true,
    },
    quantity : {
        type : Number,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    category : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Category'
    },
    images : [{
        type : String,
        required : true
    }]
})

const Product = mongoose.model('product', productSchema)
module.exports = Product