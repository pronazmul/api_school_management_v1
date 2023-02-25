// External Module:
const createError = require('http-errors')

//Internal Module:
const Teacher = require('../models/Teacher')
const { teacherProjection } = require('../models/Projections_Schema')
const { regxSearchQuery } = require('../utils/mongoose')
const { filterObjectByValues } = require('../utils/object')
const { unlinkSingleImage } = require('../utils/files')

/**
 * @desc Create
 * @Route [POST]- /api/v1/teachers
 * @Access protected - [auth]
 * @returns {OBJECT}
 */
const create = async (req, res, next) => {
  try {
    let newData = new Teacher(req.body)
    let data = await newData.save()
    let shaped = filterObjectByValues(data._doc, teacherProjection.split(' '))
    res.status(201).json(shaped)
  } catch (error) {
    next(createError(500, error))
  }
}

/**
 * @description Get Single Data
 * @Route [GET]- /api/v1/teachers/:id
 * @Access protected - [auth]
 * @returns {Object}
 */
const findOneById = async (req, res, next) => {
  try {
    let query = { _id: req.params.id }
    const data = await Teacher.findOne(query, teacherProjection)
    res.status(200).json(data)
  } catch (error) {
    next(createError(500, error))
  }
}

/**
 * @desc Get All Data
 * @Route [GET]- /api/v1/teachers
 * @Access protected - [auth]
 * @returns {Array<JSON>}
 */
const findAll = async (req, res, next) => {
  try {
    const {
      search,
      page = process.env.DEFAULT_PAGE,
      limit = process.env.DEFAULT_DATA_LIMIT,
    } = req.query

    const query = search
      ? regxSearchQuery(search, [
          'teacher_name',
          'department',
          'qualifications',
        ])
      : {}
    const options = { sort: { createdAt: 1 } }
    const totalCount = await Teacher.countDocuments(query)

    const data = await Teacher.find(query, teacherProjection, options)
      .limit(limit)
      .skip(limit * (page - 1))

    res.set('x-total-count', totalCount)

    if (totalCount) {
      return res.status(200).json(data)
    }
    return next(createError(404, 'No Data found!'))
  } catch (error) {
    next(createError(500, error))
  }
}

/**
 * @desc Update Data
 * @Route [PUT]- /api/v1/teachers/:id
 * @Access protected - [auth]
 * @returns {JSON} - Updated Object
 */
const updateOneById = async (req, res, next) => {
  try {
    let query = { _id: req.params.id }
    let options = {
      new: true,
      projection: teacherProjection,
    }
    let updatedData = await Teacher.findOneAndUpdate(query, req.body, options)

    // Check current user is logged in user, if logged in update his access token data
    if (req.params.id === req?.user?._id) {
      const accessToken = user.generateJwtToken({
        user: updatedData,
        session: req.session,
      })
      res.cookie('accessToken', accessToken, {
        maxAge: process.env.ACCESS_TOKEN,
        httpOnly: true,
      })
      return res
        .status(200)
        .json({ user: updatedData, session: req?.session?._id })
    }

    return res.status(200).json({ user: updatedData })
  } catch (error) {
    next(createError(500, error))
  }
}

/**
 * @description Upload Avatar By Id
 * @Route [POST]- /api/teachers/:id/upload
 * @Access protected - logged in user only
 * @returns {Object} - Updated User Information and JWT Token after modifing avatar url.
 */
const avatarUpload = async (req, res, next) => {
  try {
    let query = { _id: req.params.id }
    let options = { new: true, projection: teacherProjection }

    const result = await Teacher.findById(query)

    // Check Previous image is uploaded images
    const uploadedImage = result?.avatar.includes(process.env.APP_IMAGE_PATH)

    if (req.file && uploadedImage) {
      let removeOldOne = unlinkSingleImage(result.avatar)
      if (removeOldOne) result.avatar = req.file.link
    }
    if (req.file) result.avatar = req.file.link

    const user = await Teacher.findByIdAndUpdate(
      query,
      { avatar: result.avatar },
      options
    )

    if (req.params.id === req?.user?._id) {
      const accessToken = user.generateJwtToken({
        user,
        session: req.session,
      })
      res.cookie('accessToken', accessToken, {
        maxAge: process.env.ACCESS_TOKEN,
        httpOnly: true,
      })
      return res.status(200).json({ user, session: req.session?._id })
    } else {
      return res.status(200).json({ user })
    }
  } catch (error) {
    next(createError(500, error))
  }
}

/**
 * @desc Delete single
 * @Route [DELETE]- /api/v1/teachers/:id
 * @Access protected - [auth]
 * @returns {Boolean}
 */
const deleteOneById = async (req, res, next) => {
  try {
    let query = { _id: req.params.id }
    let result = await Teacher.findByIdAndDelete(query)

    if (result?.avatar.includes(process.env.APP_IMAGE_PATH))
      unlinkSingleImage(result.avatar)

    res.status(200).json({ message: 'Entry Deleted' })
  } catch (error) {
    next(createError(500, error))
  }
}

//Export Module:
module.exports = {
  create,
  findOneById,
  findAll,
  updateOneById,
  deleteOneById,
  avatarUpload,
}
