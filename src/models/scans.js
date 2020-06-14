const mongoose = require('mongoose')

const moment = require('moment-timezone')
const dateMexico = moment.tz(Date.now(), 'America/Mexico_City')

const ScansSchema = new mongoose.Schema({
  scanedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  scanDate: {
    type: Date,
    default: dateMexico
  },
  qr: {
    type: String,
    minlength: 6,
    maxlength: 500,
    required: true
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  promotion: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Promotion',
    required: true
  }

})

module.exports = mongoose.model('Scan', ScansSchema)
