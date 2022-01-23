const express = require('express')
const cors = require('cors')
require('dotenv').config()

const locationRouter = require('./routes/location.js')
const newsRouter = require('./routes/news')
const statsRouter = require('./routes/stats')
const searchRouter = require('./routes/search')

const port = process.env.PORT || 3000;

const app = express()

app.use(cors())

app.get('/', (req,res) => res.send("Listening for requests..."))

app.use('/coordinates', locationRouter)

app.use('/search', searchRouter)

app.use('/news', newsRouter)

app.use('/stats', statsRouter)

app.listen(port, () => {console.log(`App listening on port ${port}...`)})