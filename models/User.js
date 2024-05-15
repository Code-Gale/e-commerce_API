const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { isEmail } = require('validator')

const userSchema = new Schema({
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
        validate : {
            validator : (value) => isEmail(value),
            message : '{VALUE} is not a valid email address'
        }
    },
    phoneNumber : {
        type : String,
        required : true,
    },
    country : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
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

const User = mongoose.model('user', userSchema)
module.exports = User