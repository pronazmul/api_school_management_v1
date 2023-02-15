// External Modules
const createError = require('http-errors')

/**
 * @desc Authorization Checker Middleware
 * @param {Array<string>} roles
 * @returns next middleware
 */
const authorize = (roles) => (req, res, next) => {
  if (roles.some((role) => req?.user?.roles.includes(role))) {
    next()
  } else {
    next(createError(401, `Access Denied! ${roles.join('_')} Only`))
  }
}

module.exports = authorize
