const express = require('express')
const cors = require('cors')

const scanRouter = require('./routes/scan')

const server = express()

server.use(express.json())
server.use(cors())

server.use('/scans', scanRouter)

module.exports = server
