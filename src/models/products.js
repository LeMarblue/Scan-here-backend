const mongoose = require('mongoose')

const productsSchema = new mongoose.Schema({
  sku: {
    type: String,
    minlength: 6,
    maxlength: 20,
    required: true
  },
  productName: {
    type: String,
    minlength: 2,
    maxlength: 500,
    required: true
  },
  price: {
    type: Number
  },
  currency: {
    type: String,
    enum: ['mxn', 'usd', 'eur']
  }
})

module.exports = mongoose.model('Product', productsSchema)
