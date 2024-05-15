const mongoose = require('mongoose')
const config  = require('./config')

const connectDB = () => {
    mongoose.connect(config.DBURI)
        .then(result => {
            console.log('Connect to DB Successfully...')
        })
        .catch(err => {
            console.error('Could not Connect to DB...')
        }) 
}

module.exports = connectDB