const express = require('express')
const dotenv = require('dotenv')
const connectDatabase = require('./config/db')
const morgan = require('morgan')
const path = require('path')
const bodyParser = require("body-parser")

dotenv.config({
    path: './config/config.env'
})

connectDatabase()



if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.use(bodyParser.urlencoded({
    extended: true
}));



const methodOverride = require('method-override') //can put on top of app js
// Method Override package initialization
app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        const method = req.body._method
        delete req.body._method
        return method
    }
}))


app.use('/users', require('./routes/users'))
app.use('/movies', require('./routes/movies'))

const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`Running on port ${PORT}`))