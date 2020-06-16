
const bcrypt = require('bcrypt')
const jwt = require('../lib/jwt')

const user = require('../models/user')

function getAll () {
  return user.find()
}

function create (userData) {
  return user.create(userData)
}

function updatedById (id, newuserData) {
  return user.findByIdAndUpdate(id, newuserData)
}

function deletedById (id) {
  return user.findByIdAndRemove(id)
}

async function signUp (newuserData) {
  const { name, email, password, age, city } = newuserData
  if (!email) throw new Error('email is required')
  if (!password) throw new Error('password is required')
  if (!name) throw new Error('name is required')
  if (!age) throw new Error('age is required')
  if (!city) throw new Error('city is required')

  const userAlreadyExists = await user.findOne({ email })

  if (userAlreadyExists) throw new Error('Email is already registered')
  if (password < 6) throw new Error('Password must be 6 characers minimum')
  if (age < 18) throw new Error('the minimum age must be 18 years')

  const hash = await bcrypt.hash(password, 10)

  return user.create({ ...newuserData, password: hash })
}

async function logIn (email, password) {
  const userFound = await user.findOne({ email })
  if (!userFound) throw new Error('Invalid data')

  const isPasswordCorrect = await bcrypt.compare(password, userFound.password)
  if (!isPasswordCorrect) throw new Error('Invalid data')

  return jwt.sign({ id: userFound._id, roll: userFound.roll })
}

module.exports = {
  getAll,
  create,
  updatedById,
  deletedById,
  signUp,
  logIn
}
