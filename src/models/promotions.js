const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  product: [{
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'producto'
  }],
  numeroproducts: {
    type: Number,
    required: true
  },
  fechaInicio:{
    type: Date,
    required: true
  },
  fechaFinal:{
    type: Date,
    required: true
  },
  estado:{
    type: String,
    enum: ['inactivo', 'activo'],
    required: true
  },
  premio:{
    type: String,
    required: true
  }
})

module.exports = mongoose.model('product', productSchema)