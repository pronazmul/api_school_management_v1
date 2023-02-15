/**
 * @description - This Function return a list of array wtart with parameter Symbol
 * @param {String}  Main String
 * @param {CharacterData} Word Started Charecter
 * @returns {Array} LIst of array
 */
const searchWordFromString = (string, symbol) => {
  let regex = `/${symbol}\w+/g`
  console.log({ regex })

  return string.match(regex).length
    ? string.match(regex).join(' ').replaceAll(symbol, '').split(' ')
    : []
}

module.exports = {
  searchWordFromString,
}
