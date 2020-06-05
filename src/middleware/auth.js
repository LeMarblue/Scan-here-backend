
const jwt = require('../lib/jwt')

// verificar el jtw es expendido por el mismo servidor
function auth (request, response, next) {
  const { authorization: token } = request.headers
  try {
    jwt.verify(token)
    next()
  } catch (error) {
    response.status(401)
    response.json({
      success: false,
      message: 'unauthorized'
    })
  }
}

module.exports = auth
