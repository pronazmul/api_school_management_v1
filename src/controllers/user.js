// External Modules:
const createError = require('http-errors')
const Creator = require('../models/Creator')

// Internal Modules:
const People = require('../models/people')
const {
  peopleProjection,
  creatorProjection,
} = require('../models/Projection.Schema')
const { unlinkSingleImage } = require('../utils/files')

/**
 * @description Get Single Data
 * @Route [GET]- /api/users/:userID
 * @Access protected - [admin]
 * @returns {Object} - Single User Object
 */
const findOneById = async (req, res, next) => {
  try {
    // Retrive User By Id
    let query = { _id: req.params.id }
    let user = await People.findOne(query, peopleProjection)
    let creator = await Creator.findOne(
      { user: req.params.id },
      creatorProjection
    )
    res.status(200).json({ user, creator })
  } catch (error) {
    next(createError(500, error))
  }
}

/**
 * @description Get All Data
 * @Route [GET]- /api/users
 * @Access protected - [admin]
 * @returns {Array} - All User Array.
 */
const findAll = async (req, res, next) => {
  try {
    const {
      search,
      page = process.env.DEFAULT_PAGE,
      limit = process.env.DEFAULT_DATA_LIMIT,
    } = req.query

    const query = search ? regxSearchQuery(search, ['description', 'tags']) : {}
    const options = { sort: { createdAt: 1 } }

    let totalCount = await People.countDocuments(query)

    const data = await People.find(query, peopleProjection, options)
      .limit(limit)
      .skip(limit * (page - 1))

    res.set('x-total-count', totalCount)

    if (totalCount) {
      return res.status(200).json(data)
    }
    return next(createError(404, 'No Peoples found!'))
  } catch (error) {
    next(createError(500, error))
  }
}

/**
 * @description Update Data
 * @Route [PUT]- /api/users/:userID
 * @Access protected - [user, admin]
 * @returns {Object} - Updated User.
 */
const updateOneById = async (req, res, next) => {
  try {
    let query = { _id: req.params.id }
    let options = { new: true, projection: peopleProjection }

    const user = await People.findOneAndUpdate(query, req.body, options)

    if (req.params.id === req.user._id) {
      const accessToken = user.generateJwtToken({
        user,
        creator: req.creator,
        session: req.session,
      })
      res.cookie('accessToken', accessToken, {
        maxAge: process.env.ACCESS_TOKEN,
        httpOnly: true,
      })
      return res.status(200).json({ user, creator, session: req.session?._id })
    } else {
      return res.status(200).json(user)
    }
  } catch (error) {
    if (error?._message) {
      let message = error?.message?.split(':').pop()
      next(createError(422, message))
    } else {
      next(createError(500, error))
    }
  }
}

/**
 * @description Delete Data
 * @Route [DELETE]- /api/users/:userID
 * @Access protected - [admin]
 * @returns {Object} - Deleted Status.
 */
const deleteOneById = async (req, res, next) => {
  try {
    let query = { _id: req.params.id }
    await People.deleteOne(query)
    res.status(200).json({ deletedCount: 1 })
  } catch (error) {
    next(createError(500, error))
  }
}

/**
 * @description Upload Avatar By Id
 * @Route [POST]- /api/users/:userID/upload
 * @Access protected - logged in user only
 * @returns {Object} - Updated User Information and JWT Token after modifing avatar url.
 */
const avatarUpload = async (req, res, next) => {
  try {
    let query = { _id: req.params.id }
    let options = { new: true, projection: peopleProjection }

    const result = await People.findById(query)

    // Check Previous image is uploaded images
    const uploadedImage = result?.avatar.includes(process.env.APP_IMAGE_PATH)

    if (req.file && uploadedImage) {
      let removeOldOne = unlinkSingleImage(result.avatar)
      if (removeOldOne) result.avatar = req.file.link
    }

    if (req.file) result.avatar = req.file.link

    const user = await People.findByIdAndUpdate(
      query,
      { avatar: result.avatar },
      options
    )

    if (req.params.id === req.user._id) {
      const accessToken = user.generateJwtToken({
        user,
        creator: req.creator,
        session: req.session,
      })
      res.cookie('accessToken', accessToken, {
        maxAge: process.env.ACCESS_TOKEN,
        httpOnly: true,
      })
      return res.status(200).json({ user, creator, session: req.session?._id })
    } else {
      return res.status(200).json({ user })
    }
  } catch (error) {
    next(createError(500, error))
  }
}

// Module Exports:
module.exports = {
  findOneById,
  findAll,
  updateOneById,
  deleteOneById,
  avatarUpload,
}
