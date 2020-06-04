
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
    required: true
  },
  age: {
    type: Number,
    required: true
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
  rewards: {
    type: String,
    required: true
  },
  roll: {
    type: String,
    enum: ['user', 'admin'],
    required: true
  }

})

module.exports = mongoose.model('User', userSchema)
