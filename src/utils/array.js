const path = require('path')

/**
 * @description - This Function return random value from  array
 * @param {Array}  Main Array
 * @returns {Array} Random Sigle value from array
 */

const randomValueFromArray = (array) => {
  return array[Math.floor(Math.random() * array.length)]
}

/**
 * @description - This Function return random multiple value from  array
 * @param {Array}  Main Array
 * @param {Number} Number of value will be returned
 * @returns {Array} Random Array with multiple Value
 */
const randomMultipleFromArray = (array, count) => {
  const shuffledList = array.sort(() => Math.random() - 0.5)
  const newArraySize = Math.floor(Math.random() * array.length)
  return shuffledList.slice(0, count ? count : newArraySize)
}

/**
 * @description - This Function Sort In JSoN Array using Number
 * @param {string}  property Which Property will be sorted
 * @param {array} array full array which will be sorted
 * @param {'desc'} type by default it will sorted by asce if desc required pass 'desc'
 * @returns {array} sorted array
 */
const numberSortIntoJsonArray = (property, array, type = false) => {
  return array.sort((a, b) =>
    type && type === 'desc'
      ? Number(b[property]) - Number(a[property])
      : Number(a[property]) - Number(b[property])
  )
}

/**
 * @description - This Function Sort In JSoN Array Using Date
 * @param {Date}  property Database Date Fromat
 * @param {array} array full array which will be sorted
 * @param {'desc'} type by default it will sorted by asce if desc required pass 'desc'
 * @returns {array} sorted array
 */
const dateSortIntoJsonArray = (property, array, type = false) => {
  return array.sort((a, b) =>
    type && type === 'desc'
      ? new Date(b[property]).getTime() - new Date(a[property]).getTime()
      : new Date(a[property]).getTime() - new Date(b[property]).getTime()
  )
}

/**
 * @description - This Function takes files as array make usuable object format
 * @param {array} array of files link
 * @returns {array} formatted array {url: lnk, type: 'image'}
 */
const fileExtensionMaker = (array) => {
  let imageExtensions = ['.jpeg', '.jpg', '.png', '.webp']
  let videoExtensions = [
    '.webm',
    '.mp4',
    '.m4p',
    '.m4v',
    '.mpg',
    '.mp2',
    '.mpeg',
    '.mpe',
    '.mpv',
  ]

  let data = array.reduce((state, element) => {
    let type = imageExtensions.includes(path.extname(element))
      ? 'image'
      : videoExtensions.includes(path.extname(element))
      ? 'video'
      : 'unknown'

    return [...state, { url: element, type }]
  }, [])

  return data
}

module.exports = {
  randomValueFromArray,
  randomMultipleFromArray,
  dateSortIntoJsonArray,
  fileExtensionMaker,
}
