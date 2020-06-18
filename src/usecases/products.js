const product = require('../models/products')

async function getAll () {
  const allProducts = await product.find()
  return allProducts
}

async function getBySku (sku) {
  const productFound = await product.findOne({ sku })
  return productFound
}

async function create (scanData) {
  const createdProduct = await product.create(scanData)
  return createdProduct
}

function deleteById (id) {
  return product.findByIdAndRemove(id)
}

function updateById (id, scanData) {
  return product.findByIdAndUpdate(id, scanData)
}

module.exports = {
  getAll,
  getBySku,
  create,
  deleteById,
  updateById
}
