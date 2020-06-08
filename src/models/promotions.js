const mongoose = require('mongoose')

const promotionSchema = new mongoose.Schema({
  productInfo: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  }],
  numberOfScans: {
    type: Number,
    required: true
  },
  promoStarts: {
    type: Date,
    required: true
  },
  promoEnds: {
    type: Date,
    required: true
  },
  state: {
    type: String,
    enum: ['inactivo', 'activo'],
    required: true
  },
  prize: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Promotion', promotionSchema)
