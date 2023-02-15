// Required Modules:
const createError = require('http-errors')
const multerObjectMaker = require('./../../utils/multar')

/**
 * @desc Video Upload Middleware
 * @param {fieldName, subFolder}
 * @MaxFileSize 100000000 byte (100mb)
 * @MaxFileLimit 1
 * @Supprted video/mp4 **
 */

const videoUploader = (fieldName, subFolder) => async (req, res, next) => {
  try {
    let uploadObject = multerObjectMaker(
      subFolder,
      ['video/mp4'],
      100000000,
      'Unsupported File Format!'
    )
    uploadObject.single(fieldName)(req, res, (error) => {
      if (error) {
        next(createError(500, error.message))
      } else {
        if (req.file) {
          let data = {
            ...req.file,
            link:
              process.env.APP_URL +
              '/uploads/' +
              subFolder +
              '/' +
              req.file.filename,
          }
          req.file = data
        }
        next()
      }
    })
  } catch (error) {
    next(createError(500, error.message))
  }
}

// Module Exprots:
module.exports = { videoUploader }
