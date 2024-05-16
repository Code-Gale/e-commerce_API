const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/database')
const authRoutes = require('./routes/authRoutes')
const productRoutes = require('./routes/productRoutes')
const categoryRoutes = require('./routes/categoryRoutes')

const app = express()

connectDB()
dotenv.config()

app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use('/api/auth', authRoutes)
app.use('/api/', productRoutes)
app.use('/api/', categoryRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log('App is running on', PORT)
})