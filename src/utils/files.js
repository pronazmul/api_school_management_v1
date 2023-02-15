// Required Modules
const path = require('path')

const { unlink, readdirSync, unlinkSync } = require('fs')

/**
 * @desc Unlink Single Image User Defined Function
 * @AcceptedParams (String) -FullImagePath
 * @returns {Boolean}
 */

const unlinkSingleImage = async (imagePath) => {
  try {
    let slicedPath = imagePath.split('/').slice(3).join('/')
    let removedPath = path.join(__dirname, '../../public/', slicedPath)
    unlink(removedPath, (error) => {
      if (error) {
      }
    })
    return true
  } catch (error) {
    return false
  }
}

/**
 * @desc - Retrive all files from a directory and removded all.
 * @param {String} dirName
 * @returns {Number} - Length of removded file
 */

const emptyDirectory = (dirName) => {
  let directory = path.join(__dirname, `./../../public/uploads/${dirName}/`)
  let files = readdirSync(directory)

  if (!files.length) return 0
  files.forEach((file) => unlinkSync(`${directory}/${file}`))
  return files.length
}

// Export Mudule
module.exports = { unlinkSingleImage, emptyDirectory }
