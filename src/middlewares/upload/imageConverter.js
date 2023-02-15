// Required Modules:
const path = require('path')
const createError = require('http-errors')
const sharp = require('sharp')
const { unlinkSingleImage } = require('../../utils/files')

/**
 * @desc Single Image Convert To Webp Middleware, If already webp format return to next middleware()
 * @param {string} - Sub Folder Location
 * @response next middleware.
 */

const singleConvertToWebp = (subFolder) => async (req, res, next) => {
  // Check File exists or already in webp format
  if (!req.file || path.extname(req.file.filename) === '.webp') {
    return next()
  }
  try {
    sharp(
      path.join(
        __dirname,
        `../../../public/uploads/${subFolder}`,
        req.file.filename
      )
    ).toFile(
      path.join(
        __dirname,
        `../../../public/uploads/${subFolder}`,
        req.file.filename.replace(path.extname(req.file.filename), '.webp')
      ),
      (err, info) => {
        if (err === null) {
          unlinkSingleImage(req.file.link)
          req.file.link = req.file.link.replace(
            path.extname(req.file.filename),
            '.webp'
          )
          next()
        } else {
          unlinkSingleImage(req.file.link)
          next(createError(500, 'Failed To convert to webp'))
        }
      }
    )
  } catch (error) {
    next(createError(500, error.message))
  }
}

const multipleConvertToWebp = (subFolder) => async (req, res, next) => {
  if (!req.links) {
    return next()
  }
  try {
    // Without webp images
    let images = req.links.filter((image) => path.extname(image) !== '.webp')

    if (images.length) {
      images.forEach((image) => {
        let fileName = image.split('/').pop()
        sharp(
          path.join(__dirname, `../../../public/uploads/${subFolder}`, fileName)
        ).toFile(
          path.join(
            __dirname,
            `../../../public/uploads/${subFolder}`,
            fileName.replace(path.extname(fileName), '.webp')
          ),
          (err, info) => {
            if (err === null) {
              unlinkSingleImage(image)
              req.links = req.links.map((img) =>
                img.replace(path.extname(img), '.webp')
              )

              return next()
            } else {
              unlinkSingleImage(image)
              return next(createError(500, 'Failed To convert to webp'))
            }
          }
        )
      })
    }
  } catch (error) {
    return next(createError(500, error.message))
  }
}

// Module Exprots:
module.exports = { singleConvertToWebp, multipleConvertToWebp }
