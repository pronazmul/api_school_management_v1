// External Modules:
const router = require('express').Router()

// Controller:
const {
  create,
  findOneById,
  findAll,
  deleteOneById,
  updateOneById,
  avatarUpload,
} = require('../controllers/teacher')

// Middlewares
const validateRequest = require('../middlewares/validateRequest')
const { updateUserSchema } = require('../schema/userSchema')
const { singleConvertToWebp } = require('../middlewares/upload/imageConverter')
const { singleUploader } = require('../middlewares/upload/imageUploader')

//Routes:
router.post(
  '/:id/upload',
  singleUploader('avatar', 'teachers'),
  singleConvertToWebp('teachers'),
  avatarUpload
)

router.post('/', create)
router.get('/:id', findOneById)
router.put('/:id', updateOneById)
router.delete('/:id', deleteOneById)
router.get('/', findAll)

// Exports
module.exports = router
