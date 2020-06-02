
require('dotenv').config()

const server = require('./src/server')
const db = require('./src/lib/db')
const { SERVER_PORT } = process.env

async function main () {
  await db.connect()
  console.log('db connected')
  server.listen(SERVER_PORT, () => {
    console.log('server is running')
  })
}

main()
  .then(() => {
    console.log('server ready')
  })
  .catch(error => console.error('error:', error))
