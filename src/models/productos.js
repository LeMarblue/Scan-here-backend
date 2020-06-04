const mongoose = require('mongoose')

const ProductsSchema = new mongoose.Schema({
  sku: {
    type: String,
    minlength:6,
    maxlength: 20,
    required: true
  },
  qr: {
    type: String,
    minlength:6,
    maxlength: 500,
    required: true
  },
  productName:{
    type: String,
    minlength:2,
    maxlength: 500,
    required: true
  },
  price:{
    type: Number,
  },
  moneda:{
    type: String
  }
})

module.exports = mongoose.model('Product', ProductsSchema)