const express = require('express')
const product = require('../usecases/products')
const auth = require('../middleware/auth')

const router = express.Router()

router.use(auth)

router.get('/', async (request, response) => {
  try {
    const allproducts = await product.getAll()
    response.json({
      success: true,
      message: 'All products',
      data: {
        product: allproducts
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

router.post('/', async (request, response) => {
  try {
    const newproduct = await product.create(request.body)
    response.json({
      success: true,
      message: 'New product created',
      data: {
        product: newproduct
      }
    })
  } catch (error) {
    response.json({
      success: false,
      error: error.message
    })
  }
})

router.patch('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const productUpdate = await product.updateById(id, request.body)
    response.json({
      success: true,
      message: `product with id ${id} updated`,
      data: {
        product: productUpdate
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const productDeleted = await product.deleteById(id)
    response.json({
      success: true,
      message: `product with id ${id} deleted`,
      data: {
        product: productDeleted
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

module.exports = router
