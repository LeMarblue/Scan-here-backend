const express = require('express')

const query = require('../usecases/querys')

const auth = require('../middleware/auth')

const router = express.Router()

router.use(auth)

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

module.exports = router
