// External Modules:
const router = require('express').Router()

// Controller:
const {
  findOneById,
  findAll,
  updateOneById,
  deleteOneById,
  avatarUpload,
} = require('../controllers/user')

// Middlewares
const validateRequest = require('../middlewares/validateRequest')
const { updateUserSchema } = require('../schema/userSchema')
const { singleConvertToWebp } = require('../middlewares/upload/imageConverter')
const { singleUploader } = require('../middlewares/upload/imageUploader')

//Routes:
router.post(
  '/:id/upload',
  singleUploader('avatar', 'users'),
  singleConvertToWebp('users'),
  avatarUpload
)
router.get('/:id', findOneById)
router.put('/:id', updateOneById)
router.delete('/:id', deleteOneById)
router.get('/', findAll)

// Exports
module.exports = router
