const createHttpError = require('http-errors')

const validateRequest = (schema) => async (req, res, next) => {
  try {
    await schema.validate(req.body)
    next()
  } catch (error) {
    next(createHttpError(422, error))
  }
}

module.exports = validateRequest

// await schema.validate({
//   body: req.body,
//   params: req.params,
//   query: req.query,
// })
