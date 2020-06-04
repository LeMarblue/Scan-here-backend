
const bcrypt = require('bcrypt')
const jwt = require('../lib/jwt')

const User = require('../models/user')

function getAll () {
  return User.find()
}

function create (userData) {
  return User.create(userData)
}

function updatedById (id, newUserData) {
  return User.findByIdAndUpdate(id, newUserData)
}

function deletedById (id) {
  return User.findByIdAndRemove(id)
}

async function signUp (newUserData) {
  const { name, email, password, age, city, roll } = newUserData
  if (!email) throw new Error('email is required')
  if (!password) throw new Error('password is required')
  if (!name) throw new Error('name is required')
  if (!age) throw new Error('age is required')
  if (!city) throw new Error('city is required')
  if (!roll) throw new Error('roll is required')

  const userAlreadyExists = await User.findOne({ email })

  if (userAlreadyExists) throw new Error('Email is already registered')
  if (password < 6) throw new Error('Password must be 6 characers minimum')
  if (age < 18) throw new Error('the minimum age must be 18 years')

  const hash = await bcrypt.hash(password, 10)

  return User.create({ ...newUserData, password: hash })
}

async function logIn (email, password) {
  const user = await User.findOne({ email })
  if (!user) throw new Error('Invalid data')

  const isPasswordCorrect = await bcrypt.compare(password, user.password)
  if (!isPasswordCorrect) throw new Error('Invalid data')

  return jwt.sign({ id: user._id, roll: user.roll })
}

module.exports = {
  getAll,
  create,
  updatedById,
  deletedById,
  signUp,
  logIn
}
