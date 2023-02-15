// Required Modules:
const createError = require('http-errors')
const multerObjectMaker = require('../../utils/multar')

/**
 * @desc Single Image Upload Middleware, validate image format and size, upload and return direct image link as req.file
 * @param uploadPath
 * @MaxFileSize 3000000kb (3mb)
 * @MaxFileLimit 1
 * @Supprted ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']/**
 */

const singleUploader = (fieldName, subFolder) => async (req, res, next) => {
  try {
    let uploadObject = multerObjectMaker(
      subFolder,
      ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'],
      3000000,
      'Unsupported Image Format!'
    )
    await uploadObject.single(fieldName)(req, res, (error) => {
      if (error) {
        return next(createError(500, error.message))
      } else {
        if (req.file) {
          let data = {
            ...req.file,
            link:
              process.env.APP_URL +
              '/uploads/' +
              subFolder +
              '/' +
              req.file?.filename,
          }
          req.file = data
        }
        return next()
      }
    })
  } catch (error) {
    next(createError(500, error.message))
  }
}

/**
 * @desc Multiple Image Upload Middleware
 * @param uploadPath
 * @MaxFileSize 3000000kb (3mb)
 * @MaxFileLimit 5
 * @Supprted ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']/**
 */

const multipleUploader =
  (fieldName, subFolder, maxCount = 5) =>
  async (req, res, next) => {
    try {
      let uploadObject = multerObjectMaker(
        subFolder,
        ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'],
        3000000,
        'Unsupported Image Format!'
      )

      await uploadObject.array(fieldName, maxCount)(req, res, (error) => {
        if (error) {
          return next(createError(500, error.message))
        } else {
          if (req.files) {
            let data = req.files.map(
              (file) =>
                process.env.APP_URL +
                '/uploads/' +
                subFolder +
                '/' +
                file.filename
            )
            req.links = data
          }
          return next()
        }
      })
    } catch (error) {
      next(createError(500, error.message))
    }
  }

// Module Exprots:
module.exports = { singleUploader, multipleUploader }
