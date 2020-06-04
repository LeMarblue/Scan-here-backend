const express = require('express')

const escaneo = require('../usecases/escaneo')

//const auth = require('../middlewares/auth')

const router = express.Router()


// router.use((request, response, next)=>{
//   console.log(`midleware router /post`)
//   next()
// })



router.get('/', async (request, response) => {
    
    try {
        const allscans = await escaneo.getAll()
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
      const newScan = await escaneo.create(request.body)
      response.json({
        success: true,
        message: 'Scan registered',
        data: {
          scan: newScan
        }
      })
    } catch (error) {
      /*const errorsArray = Object.entries(error.errors)
        .map(([key, value]) => {
          return { [key]: value.message }
        })
        */
      response.json({
        success: false,
        error: error.message,
        //errors: errorsArray
      })
    }
})

router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const postDeleted = await Posts.deleteById(id)
    response.json({
      success: true,
      message: `post with ${id} deleted`,
      data: {
        koder: postDeleted
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
    const postUdated = await Posts.updateById(id, request.body)
    response.json({
      success: true,
      message: `post with ${id} updated`,
      data: {
        postUdated
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