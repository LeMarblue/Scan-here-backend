const express = require('express')
const promotion = require('../usecases/promotions')

const router = express.Router()

router.get('/', async (request, response) => {
  try {
    const allpromotions = await promotion.getAll()
    response.json({
      message: 'All promotions',
      data: {
        promotion: allpromotions
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
    const newpromotion = await promotion.create(request.body)
    response.json({
      success: true,
      message: 'New promotion created',
      data: {
        promotion: newpromotion
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
    const promotionUpdate = await promotion.updateById(id, request.body)
    response.json({
      success: true,
      message: `promotion with id ${id} updated`,
      data: {
        promotion: promotionUpdate
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
    const promotionDeleted = await promotion.deleteById(id)
    response.json({
      success: true,
      message: `promotion with id ${id} deleted`,
      data: {
        promotion: promotionDeleted
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


router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const promotionUpdate = await promotion.getAPromo(id)
    response.json({
      success: true,
      message: `promotion with id ${id}`,
      data: {
        promotion: promotionUpdate
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