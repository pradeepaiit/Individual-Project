require('dotenv').config()
const express = require('express')
const morgan = require('morgan')

const app = express()
const ejs = require('ejs')
const db = require('./database')

const PORT = process.env.PORT || 3000

//routes
const searchRouter = require('./routes/SearchScript')
const myfavouritesRouter = require('./routes/myfavourites')
const playlistRouter = require('./routes/playlist')

//middleware for routes
app.use('/', searchRouter)
app.use('/myfavourites', myfavouritesRouter)
app.use('/playlist', playlistRouter)

//body parser
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//static folder
app.use(express.static('Public'))

//view engine
app.set('view engine', 'ejs')
app.set('views', './views')



app.listen(PORT, () => {
    console.log(`It is working
    Here's your app: http://localhost:${PORT}`)
})