const express = require('express')
const atob = require('atob')

const scans = require('../usecases/scans')
const products = require('../usecases/products')

const auth = require('../middleware/auth')

const router = express.Router()

router.use(auth)

router.get('/', async (request, response) => {
  try {
    const allscans = await scans.getAll()
    response.json({
      success: true,
      message: 'all scans',
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

router.post('/', async (request, response) => {
  try {
    // get product id
    const qr = request.body.qr
    const decryptedData = atob(qr)
    const scanData = JSON.parse(decryptedData)
    const product = await products.getBySku(scanData.sku)
    // Checar si el QR ya ha sido registrado
    const usedQr = await scans.getByQr(qr)
    if (usedQr) {
      throw Error('Codigo QR ya usado')
    }

    // get user id
    const token = request.header('Authorization')
    const payload = token.split('.')[1]
    const decodedPayload = atob(payload)
    const userId = decodedPayload.id

    const newScan = await scans.create({
      ScanedBy: userId,
      qr,
      product: product._id,
      promotion: request.body.promotionId
    })

    response.json({
      success: true,
      message: 'Scan registered',
      data: {
        scan: newScan
      }
    })
  } catch (error) {
    response.json({
      success: false,
      error: error.message
    })
  }
})

router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const scanDeleted = await scans.deleteById(id)
    response.json({
      success: true,
      message: `scan with ${id} deleted`,
      data: {
        koder: scanDeleted
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

router.patch('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const scanUdated = await scans.updateById(id, request.body)
    response.json({
      success: true,
      message: `scan with ${id} updated`,
      data: {
        scanUdated
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
