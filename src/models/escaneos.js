const mongoose = require('mongoose')

const ScansSchema = new mongoose.Schema({
  scanedBy: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User'
  },
  scanDate: {
    type: String,
    minlength:2,
    maxlength: 20,
    required: true
  },
  scanTime: {
    type: String,
    minlength:2,
    maxlength: 500,
    required: true
  },
  product: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Product'
    }
})


module.exports = mongoose.model('Scan', ScansSchema)
