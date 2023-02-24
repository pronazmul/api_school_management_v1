// External Modules:
const router = require('express').Router()

// Controller:
const {} = require('../controllers/mark')

// Middlewares
const validateRequest = require('../middlewares/validateRequest')
const { updateUserSchema } = require('../schema/userSchema')
const { singleConvertToWebp } = require('../middlewares/upload/imageConverter')
const { singleUploader } = require('../middlewares/upload/imageUploader')

//Routes:
router.post('/', (req, res) => {})
router.get('/:id', (req, res) => {})
router.put('/:id', (req, res) => {})
router.delete('/:id', (req, res) => {})
router.get('/', (req, res) => {})

// Exports
module.exports = router
