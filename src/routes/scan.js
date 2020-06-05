const express = require('express')

const product = require('../usecases/scans')

const router = express.Router()


router.get('/', async (request, response) => {
    
    try {
        const allscans = await product.getAll()
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
            error: error.message,
          })
        
    }
})


router.post('/' ,async (request, response) => {
    try {
      const newScan = await product.create(request.body)
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
        error: error.message,
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

router.patch('/:id' , async (request, response) => {
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