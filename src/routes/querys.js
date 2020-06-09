const express = require('express')

const query = require('../usecases/querys')

const router = express.Router()

router.get('/', async (request, response) => {
  try {
    const { startDate, endDate, date } = request.query
    let allScans
    if (startDate && endDate) {
      allScans = await query.scansBetwenTwoDates(startDate, endDate)
    } else if (date) {
      allScans = await query.scansByDate(date)
    }
    response.json({
      success: true,
      message: 'all scans',
      data: {
        scans: allScans
      }
    })
  } catch (error) {
    response.json({
      success: false,
      error: error.message
    })
  }
})

router.get('/scansPerDayBetwen', async (request, response) => {
    
  try {
      const allscans = await query.scansPerDayBetwen()
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


router.get('/countScans', async (request, response) => {
    
  try {
      const allscans = await query.countScans()
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

router.get('/countScansByProduct/:id', async (request, response) => {
  try {
    const { id } = request.params
    const scansByProduct = await query.countScansByProduct(id, request.body)
    response.json({
      success: true,
      message: `User with id ${id} updated`,
      data: {
        scans: scansByProduct
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


router.get('/scansByHour', async (request, response) => {
    
  try {
      const allscans = await query.countScansByHour()
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



module.exports = router
