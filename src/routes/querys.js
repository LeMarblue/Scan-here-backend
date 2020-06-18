const express = require('express')
const moment = require('moment')

const query = require('../usecases/querys')

const router = express.Router()

router.get('/', async (request, response) => {
  try {
    const queryDate = request.query.date;
    const date = moment(queryDate)
    let allScans
    allScans = await query.scansByDate(date)
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

router.get('/countScansByProduct/:id', async (request, response) => {
  try {
    const { id } = request.params
    const promo_id =  request.query.promo_id
    const scansByProduct = await query.countScansByProduct(id, promo_id)
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


router.get('/productScansByDate/:id', async (request, response) => {
    
  try {
      const { id } = request.params
      const promo_id =  request.query.promo_id
      const date = moment(request.query.date)
      const allscans = await query.productScansByDate(date,promo_id,id)
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
