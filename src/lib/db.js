
const mongoose = require('mongoose')

// const {
//   DB_USER,
//   DB_PASSWORD,
//   DB_HOST,
//   DB_NAME
// } = process.env

const user = 'gerardo_ssc'
const password = '13031992Cabelludo'
const host = 'cluster0-cqvji.mongodb.net'
const dbName = 'medium'
const url = `mongodb+srv://${user}:${password}@${host}/${dbName}?retryWrites=true&w=majority`




//const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`

function connect () {
  mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
}

module.exports = {
  connect
}
