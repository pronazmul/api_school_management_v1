// External Module:
const createError = require('http-errors')

//Internal Module:
const Attendance = require('../models/Attendance')
const Student = require('../models/Student')
const { attendanceProjection } = require('../models/Projections_Schema')
const { regxSearchQuery } = require('../utils/mongoose')
const { filterObjectByValues } = require('../utils/object')

/**
 * @desc Create
 * @Route [POST]- /api/v1/attendances/:classID
 * @Access protected - [auth]
 * @returns {OBJECT}
 */
const generateAttandance = async (req, res, next) => {
  try {
    let classID = req.params.classID
    let date = req.query.date
    let students = await Student.find({ class: classID }, '_id name')

    let newAttandance = new Attendance({
      class: classID,
      date,
      attendance: students.map((std) => ({
        student: std?._id,
      })),
    })

    let attendance = await newAttandance.save()

    let shaped = filterObjectByValues(
      attendance._doc,
      attendanceProjection.split(' ')
    )
    res.status(201).json(shaped)
  } catch (error) {
    next(createError(500, error))
  }
}

/**
 * @description Get Single Data
 * @Route [GET]- /api/v1/attendances/:attendanceID
 * @Access protected - [auth]
 * @returns {Object}
 */
const findOneById = async (req, res, next) => {
  try {
    let query = { _id: req.params.attendanceID }
    const data = await Attendance.findOne(query, attendanceProjection)
    res.status(200).json(data)
  } catch (error) {
    next(createError(500, error))
  }
}

/**
 * @desc Update Data
 * @Route [PUT]- /api/v1/attendances/:attendanceID
 * @Access protected - [auth]
 * @returns {JSON} - Updated Object
 */
const updateOneById = async (req, res, next) => {
  try {
    let query = { _id: req?.params?.attendanceID }
    let students = req?.body?.students

    let updatedData = await Attendance.findOneAndUpdate(
      query,
      { $set: { 'attendance.$[element].status': true } },
      {
        arrayFilters: [{ 'element.student': { $in: students } }],
        new: true,
        projection: attendanceProjection,
      }
    )
    res.status(200).json(updatedData)
  } catch (error) {
    next(createError(500, error))
  }
}

/**
 * @desc Delete single
 * @Route [DELETE]- /api/v1/attendances/:attendanceID
 * @Access protected - [auth]
 * @returns {Boolean}
 */
const deleteOneById = async (req, res, next) => {
  try {
    let query = { _id: req.params.attendanceID }
    await Attendance.findByIdAndDelete(query)
    res.status(200).json({ message: 'Entry Deleted' })
  } catch (error) {
    next(createError(500, error))
  }
}

/**
 * @description Get Single Data
 * @Route [GET]- /api/v1/attendances/:studentID
 * @Access protected - [auth]
 * @returns {Object}
 */
const individualStudentReport = async (req, res, next) => {
  try {
    let query = { _id: req.params.id }
    const data = await Attendance.findOne(query, attendanceProjection)
    res.status(200).json(data)
  } catch (error) {
    next(createError(500, error))
  }
}

//Export Module:
module.exports = {
  generateAttandance,
  findOneById,
  updateOneById,
  deleteOneById,
  individualStudentReport,
}
