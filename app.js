const express = require('express')
const morgan = require('morgan')
const app = express()
const dotenv = require('dotenv')

const dotenvStat = dotenv.config({
    path: './config/.env'
})

if (dotenvStat.error) {
    throw dotenvStat.error.stack
}

if (process.env.NODE_ENVIRONMENT === 'development') {
    console.log('Morgan set')
    app.use(morgan('dev'))
}
app.use(express.json())

const routes = require('./src/route')

app.use('/', routes)

app.listen(3000, () => {
    console.log(`App is listening on port 3000`)
})