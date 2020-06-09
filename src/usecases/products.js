const product = require('../models/products')

async function getAll () {
  const allScans = await product.find()
  return allScans
}

async function create (scanData) {
  const scanDone = await product.create(scanData)
  return scanDone
}

function deleteById (id) {
  return product.findByIdAndRemove(id)
}

function updateById (id, scanData) {
  return product.findByIdAndUpdate(id, scanData)
}

module.exports = {
  getAll,
  create,
  deleteById,
  updateById
}
