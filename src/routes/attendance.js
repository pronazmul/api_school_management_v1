// External Modules:
const router = require('express').Router()

// Controller:
const {
  generateAttandance,
  findOneById,
  deleteOneById,
  updateOneById,
  individualStudentReport,
} = require('../controllers/attendance')

// Middlewares
const validateRequest = require('../middlewares/validateRequest')
const { updateUserSchema } = require('../schema/userSchema')
const { singleConvertToWebp } = require('../middlewares/upload/imageConverter')
const { singleUploader } = require('../middlewares/upload/imageUploader')

//Routes:
router.get('/generate/:classID', generateAttandance)
router.put('/:attendanceID', updateOneById)
router.get('/:attendanceID', findOneById)
router.delete('/:attendanceID', deleteOneById)

router.get('/:studentID', individualStudentReport)
// Exports
module.exports = router
