
const mongoose = require('mongoose')

// const {
//   DB_product,
//   DB_PASSWORD,
//   DB_HOST,
//   DB_NAME
// } = process.env

const product = 'gerardo_ssc'
const password = '13031992Cabelludo'
const host = 'cluster0-cqvji.mongodb.net'
const dbName = 'medium'
const url = `mongodb+srv://${product}:${password}@${host}/${dbName}?retryWrites=true&w=majority`




//const url = `mongodb+srv://${DB_product}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`

function connect () {
  return mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true })
}

module.exports = {
  connect
}
