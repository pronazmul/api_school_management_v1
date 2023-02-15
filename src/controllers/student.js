// External Module:
const createError = require('http-errors')

//Internal Module:
const Student = require('../models/Student')
const { studentProjection } = require('../models/Projections_Schema')
const { regxSearchQuery } = require('../utils/mongoose')
const { filterObjectByValues } = require('../utils/object')

/**
 * @desc Create
 * @Route [POST]- /api/v1/students
 * @Access protected - [auth]
 * @returns {OBJECT}
 */
const create = async (req, res, next) => {
  try {
    let newData = new Student({ ...req.body })
    let data = await newData.save()
    let shaped = filterObjectByValues(data._doc, studentProjection.split(' '))
    res.status(201).json(shaped)
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
 * @description Get Single Data
 * @Route [GET]- /api/v1/students/:id
 * @Access protected - [auth]
 * @returns {Object}
 */
const findOneById = async (req, res, next) => {
  try {
    let query = { _id: req.params.id }
    const data = await Student.findOne(query, studentProjection)
    res.status(200).json(data)
  } catch (error) {
    next(createError(500, error))
  }
}

/**
 * @desc Get All Data
 * @Route [GET]- /api/v1/students
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

    const query = search ? regxSearchQuery(search, ['name']) : {}
    const options = { sort: { createdAt: 1 } }
    const totalCount = await Student.countDocuments(query)

    const data = await Student.find(query, studentProjection, options)
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
 * @Route [PUT]- /api/v1/students/:id
 * @Access protected - [auth]
 * @returns {JSON} - Updated Object
 */
const updateOneById = async (req, res, next) => {
  try {
    let query = { _id: req.params.id }
    let options = {
      new: true,
      projection: studentProjection,
    }
    let updatedData = await Student.findOneAndUpdate(query, req.body, options)
    res.status(200).json(updatedData)
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
 * @desc Delete single
 * @Route [DELETE]- /api/v1/students/:id
 * @Access protected - [auth]
 * @returns {Boolean}
 */
const deleteOneById = async (req, res, next) => {
  try {
    let query = { _id: req.params.id }
    await Student.findByIdAndDelete(query)
    res.status(200).json({ deletedCount: 1 })
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
}
