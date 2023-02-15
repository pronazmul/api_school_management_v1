// External Modules:
const router = require('express').Router()

// Controller:
const {
  login,
  profile,
  logout,
  activeSessions,
  deactiveSession,
  register,
} = require('../controllers/auth')

// Middlewares
const validateRequest = require('../middlewares/validateRequest')
const { loginSchema } = require('../schema/userSchema')
const authenticate = require('../middlewares/auth/authenticate')

//Routes:
router.put('/sessions/:sessionId', deactiveSession)
router.get('/sessions/:userId', authenticate, activeSessions)
router.get('/profile', authenticate, profile)
router.get('/logout', authenticate, logout)
router.post('/', login, register)

// Exports
module.exports = router
