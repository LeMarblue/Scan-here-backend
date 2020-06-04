const express = require('express')
const cors = require('cors')

const UserRouter = require('./routes/user')

const server = express()

server.use(express.json())
server.use(cors())

server.use('/users', UserRouter)

module.exports = server
