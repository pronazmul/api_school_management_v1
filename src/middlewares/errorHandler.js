// External Modules:
const createError = require('http-errors')

/**
 *Title : Not Fund Middleware
 *Description: Route Path not fund application second last middleware. This middleware fires when route path missed all endpoints and send a  Send a custom error message to error handling middleware.
 */

const notFoundHandler = (req, res, next) => {
  next(createError(404, `Not Found - ${req.originalUrl}`))
}

/*
 *Title : Custom Error Handler Middleware
 *Description: Application Last Middleware take 4 parameters.This middleware is used to handle errors. Send a custom error message to Client Interface.
 */
const errorHandler = (error, req, res, next) => {
  const errorMessage =
    process.env.NODE_ENV === 'production'
      ? { message: error.message }
      : { message: error.message, stack: error.stack }

  res.status(error.status || 500).json(errorMessage)
}

// MOdule Exports:
module.exports = { notFoundHandler, errorHandler }
