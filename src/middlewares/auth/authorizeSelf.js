// External Modules
const createError = require('http-errors')

/**
 * @desc Single User Authorize Middleware, A single user only can retrive, edit, update his inidividual profile.
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
const authorizeSelf = (req, res, next) => {
  if (req?.user?.roles.includes('admin')) return next()
  const accessId = req.params.id
  const userId = req.user._id.toString()

  if (accessId === userId) {
    next()
  } else {
    next(createError(401, `Access Denied!`))
  }
}

module.exports = authorizeSelf
