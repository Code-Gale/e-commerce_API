const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/database')
const authroutes = require('./routes/authRoutes')

const app = express()

connectDB()
dotenv.config()

app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use('/api/auth', authroutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log('App is running on', PORT)
})