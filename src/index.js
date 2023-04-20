const express = require('express')
const { dirname, join } = require('path')
const { fileURLToPath } = require('url')
const indexRoutes = require('./routes/index.js')
//const nodemailer = require('nodemailer')


const app = express()

//const __dirname = dirname(fileURLToPath(import.meta.url))

app.set('views', join(__dirname, 'views'))
console.log(join(__dirname, 'public'))

app.set('view engine', 'ejs')

app.use(indexRoutes)

app.use(express.static(join(__dirname, 'public')))

app.listen(3000)
console.log("Server is listened in port", 3000);


