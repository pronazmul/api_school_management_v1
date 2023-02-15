// External Modules:
const express = require('express')
const colors = require('colors')
require('dotenv').config()

// Internal Modules:
const routes = require('./src/routes')
const {
  notFoundHandler,
  errorHandler,
} = require('./src/middlewares/errorHandler')
const { mongooseConnection } = require('./src/config/db')
const globalMiddlewares = require('./src/middlewares/globalMiddlewares')

// Initialization:
const app = express()

// Databse Connection:
mongooseConnection()

// Global Middlwares
app.use(globalMiddlewares)

// Routes:
app.use(routes)

//Not Found & Error Handler
app.use([notFoundHandler, errorHandler])

// Server:
app.listen(process.env.PORT, () =>
  console.log(`Server listening on port ${process.env.PORT}`.rainbow.bold)
)
