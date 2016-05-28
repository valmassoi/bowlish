'use strict'

//https://www.quandl.com/docs/api

// const path = require('path') //TODO SEE IF STATIC WORKS__DIRMNAME
const express = require('express')
const http = require('http')
// const myApp = require('./app')
const routes = require('./app/routes/stocks')
const mongo = require('mongodb').MongoClient
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

const dbUrl = process.env.MONGODB_URI || 'mongodb://localhost:27018/data'

app.use(express.static(__dirname+'/public/'))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.enable('trust proxy')

app.use('/api/stocks', routes)

app.get('*', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('404!')
})

const port = process.env.PORT || 8081

const server = http.Server(app)
server.listen(port, () => {
  console.log('Server Running on port: ' + port)
})

const io = require('socket.io')(server)
io.sockets.on('connection', (socket) => {
  console.log("connected to sockets" + socket.id)
  socket.on('add stock', (symbol) => {
    io.emit('add stock', symbol)//FIX broadcast
  })
  socket.on('rm stock', (symbol) => {
    io.emit('rm stock', symbol)
  })
})
