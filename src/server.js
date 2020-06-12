const express = require('express')
const cors = require('cors')

const scanRouter = require('./routes/scan')
const UserRouter = require('./routes/user')
const productRouter = require('./routes/products')
const promotionRouter = require('./routes/promotions')
const queryRouter = require('./routes/querys')
const authRouter = require('./routes/auth')

const server = express()

server.use(express.json())
server.use(cors())

server.use('/scans', scanRouter)
server.use('/users', UserRouter)
server.use('/products', productRouter)
server.use('/promotions', promotionRouter)
server.use('/querys', queryRouter)
server.use('/auth', authRouter)

module.exports = server
