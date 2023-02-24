// External Modules:
const createError = require('http-errors')

// Internal Modules:
const People = require('../models/People')
const Session = require('../models/Session')
const detectDevice = require('../utils/detectDevice')
const { peopleProjection } = require('../models/Projections_Schema')
const { filterObjectByValues } = require('../utils/object')

/**
 * @description Register New User
 * @Route [POST]- /api/auth/register
 * @Access Public
 * @returns {Object} - Created User.
 */
const register = async (req, res, next) => {
  try {
    // CREATE USER OBJECT
    let newUser = new People(req.body)
    const user = await newUser.save()

    let filteredUser = filterObjectByValues(
      user._doc,
      peopleProjection.split(' ')
    )
    // Create Session
    let session = await Session.create({
      user: user?._id,
      userAgent: detectDevice(req.headers['user-agent']),
    })

    let accessToken = user.generateJwtToken({
      user: filteredUser,
      session,
    })
    let refreshToken = user.generateJwtToken(
      { session },
      process.env.REFRESH_TOKEN
    )
    res.cookie('accessToken', accessToken, {
      maxAge: process.env.ACCESS_TOKEN,
      httpOnly: true,
    })
    res.cookie('refreshToken', refreshToken, {
      maxAge: process.env.REFRESH_TOKEN,
      httpOnly: true,
    })

    res.status(201).json({
      user: filteredUser,
      session: session?._id,
    })
  } catch (error) {
    next(createError(500, error))
  }
}

/**
 * @description Login with usernaem|mobile passwrod
 * @Route [POST]- /api/auth/login
 * @Access Public
 * @returns {Object} - Logged in User.
 */
const login = async (req, res, next) => {
  let { username, password } = req.body
  let query = { $or: [{ email: username }, { mobile: username }] }
  try {
    let user = await People.findOne(query)
    console.log({ user })
    if (!user) return next(createError(401, 'Authentication Failed!'))

    let isPasswordMatch = await user.checkPassword(password)
    if (user && isPasswordMatch) {
      let session = await Session.create({
        user: user?._id,
        userAgent: detectDevice(req.headers['user-agent']),
      })

      let filteredUser = filterObjectByValues(
        user._doc,
        peopleProjection.split(' ')
      )

      let accessToken = user.generateJwtToken({ user: filteredUser, session })

      let refreshToken = user.generateJwtToken(
        { session },
        process.env.REFRESH_TOKEN
      )
      res.cookie('accessToken', accessToken, {
        maxAge: process.env.ACCESS_TOKEN,
        httpOnly: true,
      })
      res.cookie('refreshToken', refreshToken, {
        maxAge: process.env.REFRESH_TOKEN,
        httpOnly: true,
      })
      return res.status(200).json({ user: filteredUser, session: session?._id })
    } else {
      return next(createError(401, 'Authentication Failed!'))
    }
  } catch (error) {
    next(createError(500, error))
  }
}

/**
 * @description Retrive Logged User Information
 * @Route [GET]- /api/auth/profile
 * @Access Public
 * @returns {Object} - Logged in User Data
 */
const profile = async (req, res, next) => {
  const { user, session } = req

  res.status(200).json({
    user: user?._doc ? user._doc : user,
    session: session._id.toString(),
  })
}

/**
 * @description Retrive All Logged In user's Sessions
 * @Route [GET]- /api/auth/sessions/:userId
 * @Access Public
 * @returns {Array} - All Active Session
 */
const activeSessions = async (req, res, next) => {
  try {
    let query = { user: req.params.userId, valid: true }
    let projection = {}
    const data = await Session.find(query, projection).sort({ updatedAt: -1 })
    res.status(200).json(data)
  } catch (error) {
    next(createError(500, error))
  }
}

/**
 * @description Deactive Session by Sessin Id
 * @Route [PUT]- /api/auth/sessions/:sessionId
 * @Access Public
 * @returns {Object} - Deactivate Session Details
 */
const deactiveSession = async (req, res, next) => {
  try {
    let query = { _id: req.params.sessionId }
    let updatedData = { valid: false }
    let options = { new: true }
    const data = await Session.findOneAndUpdate(query, updatedData, options)

    if (data) {
      return res.status(200).json(data)
    } else {
      return next(createError(500, 'Invalid Session ID'))
    }
  } catch (error) {
    next(createError(500, error))
  }
}

/**
 * @description Logout User
 * @Route [POST]- /api/users/auth/logout
 * @Access Private
 * @returns {Object} - logout
 */
const logout = async (req, res, next) => {
  try {
    let query = { _id: req.session._id }
    let update = {
      valid: false,
    }

    await Session.updateOne(query, update)
    await Creator.updateOne(
      { user: req.user._id },
      { availability: 0 },
      { new: true }
    )

    res.cookie('accessToken', '', {
      maxAge: 0,
      httpOnly: true,
    })
    res.cookie('refreshToken', '', {
      maxAge: 0,
      httpOnly: true,
    })
    res.status(200).json({ data: true })
  } catch (error) {
    next(createError(500, error))
  }
}

// Module Exports:
module.exports = {
  register,
  login,
  profile,
  logout,
  activeSessions,
  deactiveSession,
}
