// Required Modules:
const createError = require('http-errors')
const multerObjectMaker = require('../../utils/multarObjectMaker')

/**
 * @desc Xlsx File Upload Middleware
 * @param uploadPath
 * @MaxFileSize 1000000kb
 * @MaxFileLimit 1
 * @Supprted xlsx File Only**
 */

const singleXlsxFileUploader =
  (fieldName, subFolder) => async (req, res, next) => {
    try {
      let uploadObject = multerObjectMaker(
        subFolder,
        ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'],
        1000000,
        'Unsupported File Format!'
      )
      await uploadObject.single(fieldName)(req, res, (error) => {
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
module.exports = { singleXlsxFileUploader }
