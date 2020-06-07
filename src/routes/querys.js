const express = require('express')

const query = require('../usecases/querys')

const router = express.Router()


router.get('/', async (request, response) => {
    
    try {
        const allscans = await query.scansBetwen()
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