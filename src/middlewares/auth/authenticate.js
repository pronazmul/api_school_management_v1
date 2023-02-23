// External Modules:
const createError = require('http-errors')
const People = require('../../models/People')
const { peopleProjection } = require('../../models/Projections_Schema')
const Session = require('../../models/Session')
const { decode } = require('../../utils/jwt')

/**
 * @desc This Checker Receive Two Tokens AccessToken and RefreshToken from cookie. If AccessToken Valid Not need of frture Check Next to Resource Controller. If no AccessToken Availabe check session validity using RefreshToken, if session invalid Remove RefreshToken form brower cookie and send Authentication Failed Error. If Session valid Update Check Time, retrive user and create new accessToken and RefreshToken and save in response-cookie Next to Resource Controller. If no token Access or Refresh available Send Authentication Failed Error.
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns next() || Error
 */

const authenticate = async (req, res, next) => {
  try {
    const accessToken = req.cookies['accessToken']
    const refreshToken = req.cookies['refreshToken']

    if (accessToken) {
      const {
        decoded: { user, session },
      } = decode(accessToken)
      req.user = user
      req.session = session
      return next()
    }

    if (!accessToken && refreshToken) {
      const {
        decoded: { session },
      } = decode(refreshToken)

      let query = { _id: session?._id, valid: true }
      let updatedData = { updatedAt: Date.now() }
      let options = { new: true }

      const validSession = await Session.findOneAndUpdate(
        query,
        updatedData,
        options
      )

      if (!validSession) {
        res.cookie('accessToken', '', {
          maxAge: 0,
          httpOnly: true,
        })
        res.cookie('refreshToken', '', {
          maxAge: 0,
          httpOnly: true,
        })
        return next(createError(401, 'Authentication Failed'))
      }

      const user = await People.findById(session?.user, peopleProjection)

      let access = user.generateJwtToken({
        user: user,
        session: validSession,
      })

      let refresh = user.generateJwtToken(
        { session: validSession },
        process.env.REFRESH_TOKEN
      )
      res.cookie('accessToken', access, {
        maxAge: process.env.ACCESS_TOKEN,
        httpOnly: true,
      })
      res.cookie('refreshToken', refresh, {
        maxAge: process.env.REFRESH_TOKEN,
        httpOnly: true,
      })
      req.session = validSession
      req.user = user
      return next()
    }
    if (!accessToken && !refreshToken) {
      return next(createError(401, 'Authentication Failed'))
    }
  } catch (error) {
    return next('Internal Server Error!')
  }
}

// Module Export :
module.exports = authenticate
