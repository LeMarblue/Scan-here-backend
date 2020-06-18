
const express = require('express')
const user = require('../usecases/user')

const auth = require('../middleware/auth')

const router = express.Router()

router.get('/', auth, async (request, response) => {
  try {
    const allUsers = await user.getAll()
    response.json({
      success: true,
      message: 'All users',
      data: {
        user: allUsers
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

router.post('/', auth, async (request, response) => {
  try {
    const newUser = await user.create(request.body)
    response.json({
      success: true,
      message: 'New user created',
      data: {
        user: newUser
      }
    })
  } catch (error) {
    response.json({
      success: false,
      error: error.message
    })
  }
})

router.patch('/:id', auth, async (request, response) => {
  try {
    const { id } = request.params
    const userUpdate = await user.updateById(id, request.body)
    response.json({
      success: true,
      message: `User with id ${id} updated`,
      data: {
        user: userUpdate
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

router.delete('/:id', auth, async (request, response) => {
  try {
    const { id } = request.params
    const UserDeleted = await user.deletedById(id)
    response.json({
      success: true,
      message: `User with id ${id} deleted`,
      data: {
        User: UserDeleted
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

router.post('/signup', async (request, response) => {
  try {
    const newUser = await user.signUp(request.body)
    response.json({
      success: true,
      message: 'User registered',
      data: {
        user: newUser
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
