const mongoose = require('mongoose')

const productsSchema = new mongoose.Schema({
  sku: {
    type: String,
    minlength:6,
    maxlength: 20,
    required: true,
    index: true
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

module.exports = mongoose.model('product', productsSchema)