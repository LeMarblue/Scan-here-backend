
const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    minLength: 5
  },
  password: {
    type: String,
    required: true,
    minLength: 6
  },
  name: {
    type: String,
    required: true,
    minLength: 3
  },
  registerDate: {
    type: Date,
    default: Date.now()
  },
  age: {
    type: Number,
    required: true,
    min: 18
  },
  gender: {
    type: String,
    enum: ['m', 'f', 'n'],
    required: true
  },
  city: {
    type: String,
    required: true
  },
  rewards: { // vendria el id de las promociones
    type: Object
  },
  roll: {
    type: String,
    enum: ['user', 'admin', 'comercio'],
    required: true
  }

})

module.exports = mongoose.model('user', userSchema)