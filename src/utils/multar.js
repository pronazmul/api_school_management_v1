// Required Modules
const createError = require('http-errors')
const multer = require('multer')
const path = require('path')

/**
 * @desc Multer Image Validation and create Multar Object
 * @FirstParam Define Folder Path
 * @SecondParam Allowed image format Array
 * @ThirdParam Max File Size
 * @Forthparam  Custom Error Message
 */

const multerObjectMaker = (
  subFolderPath = 'images',
  allowedFileFormat = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'],
  maxFileSize = 1000000,
  errorMessage = 'Unsupported Image Format!'
) => {
  let uplaodPath = `${__dirname}/../../public/uploads/${subFolderPath}`

  const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, uplaodPath),
    filename: (req, file, cb) => {
      let ext = path.extname(file.originalname)
      let fileName =
        file.originalname.replace(ext, '').split(' ').join('_') +
        '_' +
        Date.now() +
        ext
      cb(null, fileName)
    },
  })

  const upload = multer({
    storage: storage,
    limits: { fileSize: maxFileSize },
    fileFilter: (req, file, cb) => {
      if (allowedFileFormat.includes(file.mimetype)) {
        cb(null, true)
      } else {
        cb(createError(500, errorMessage))
      }
    },
  })

  return upload
}

module.exports = multerObjectMaker
