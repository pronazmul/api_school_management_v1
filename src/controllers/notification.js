// External Module:
const createError = require('http-errors')

//Internal Module:
const Notification = require('../models/Notification')
const { notificationProjection } = require('../models/Projections_Schema')
const { regxSearchQuery } = require('../utils/mongoose')
const { filterObjectByValues } = require('../utils/object')

/**
 * @desc Create
 * @Route [POST]- /api/v1/notifications
 * @Access protected - [auth]
 * @returns {OBJECT}
 */
const create = async (req, res, next) => {
  try {
    let newData = new Notification({ ...req.body })
    let data = await newData.save()
    let shaped = filterObjectByValues(
      data._doc,
      notificationProjection.split(' ')
    )
    res.status(201).json(shaped)
  } catch (error) {
    next(createError(500, error))
  }
}

/**
 * @description Get Single Data
 * @Route [GET]- /api/v1/notifications/:id
 * @Access protected - [auth]
 * @returns {Object}
 */
const findOneById = async (req, res, next) => {
  try {
    let query = { _id: req.params.id }
    const data = await Notification.findOne(query, notificationProjection)
    res.status(200).json(data)
  } catch (error) {
    next(createError(500, error))
  }
}

/**
 * @desc Get All Data
 * @Route [GET]- /api/v1/notifications
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
    const totalCount = await Notification.countDocuments(query)

    const data = await Notification.find(query, notificationProjection, options)
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
 * @Route [PUT]- /api/v1/notifications/:id
 * @Access protected - [auth]
 * @returns {JSON} - Updated Object
 */
const updateOneById = async (req, res, next) => {
  try {
    let query = { _id: req.params.id }
    let options = {
      new: true,
      projection: notificationProjection,
    }
    let updatedData = await Notification.findOneAndUpdate(
      query,
      req.body,
      options
    )
    res.status(200).json(updatedData)
  } catch (error) {
    next(createError(500, error))
  }
}

/**
 * @desc Delete single
 * @Route [DELETE]- /api/v1/notifications/:id
 * @Access protected - [auth]
 * @returns {Boolean}
 */
const deleteOneById = async (req, res, next) => {
  try {
    let query = { _id: req.params.id }
    await Notification.findByIdAndDelete(query)
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
}
