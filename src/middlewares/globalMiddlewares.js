const cookieParser = require('cookie-parser')
let { json, static, urlencoded } = require('express')
const expressRateLimit = require('express-rate-limit')
const path = require('path')
const morgan = require('morgan')
const cors = require('cors')

// Customise Morgan:
morgan.token('timestamp', () => {
  let day = new Date().toDateString()
  let timestamp = new Date().toLocaleTimeString()
  return `${day}- ${timestamp}`
})
const logFormat =
  ':timestamp :method :url :status :res[content-length] - :response-time ms'

/**
 * @Desc: Global Middlewares
 * @middleware : Rate Limitation Middleware
 * @middleware : Static Path Middleware
 * @middleware : json parser middleware
 * @middleware : cookieParser Middleware
 */
const globalMiddlewares = [
  morgan(logFormat),
  // morgan('dev'),
  cors({ origin: 'http://localhost:3000', credentials: true }),
  // cors(),
  cookieParser(),
  expressRateLimit({
    windowMs: 1 * 60 * 1000, // 1 Munite
    max: 100, // How many Request Excepted Each 1 Munite
    message: 'Too many request from this IP, please try again after 10 Munite',
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  }),
  static(path.join(__dirname, '../../public')),
  json(),
  urlencoded({ extended: true }),
]
module.exports = globalMiddlewares
