const mongoose = require('mongoose')

const ScansSchema = new mongoose.Schema({
  scanedBy: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'user'
  },
  scanDate: {
    type: Date,
    default: Date.now()
  },
  qr: {
    type: String,
    minlength:6,
    maxlength: 500,
    required: true
  },
  product: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Product'
    }
})


module.exports = mongoose.model('Scan', ScansSchema)


