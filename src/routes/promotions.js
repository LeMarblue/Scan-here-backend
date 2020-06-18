const express = require('express')
const atob = require('atob')

const promotion = require('../usecases/promotions')
const auth = require('../middleware/auth')
const scans = require('../usecases/scans')

const router = express.Router()

router.use(auth)

router.get('/', async (request, response) => {
  try {
    const allpromotions = await promotion.getAll()
    response.json({
      success: true,
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

router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const promotionFound = await promotion.getById(id)
    response.json({
      success: true,
      message: 'All promotions',
      data: {
        promotion: promotionFound
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

router.get('/:promotionId/scans', async (request, response) => {
  try {
    const token = request.header('Authorization')
    const payload = token.split('.')[1]
    const decodedPayload = atob(payload)
    const userId = decodedPayload.id
    const { promotionId } = request.params
    const allscans = await scans.getScanByUserAndPromotionId(userId, promotionId)
    response.json({
      success: true,
      message: 'all scans scaned by the user',
      data: {
        scans: allscans
      }
    })
  } catch (error) {
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
