/**
 * @desc Express Validator Error Object formatter Helper Functions
 * @param {Object} Error Object
 * @returns {Object} Formatted Object
 */
const expressValidatorErrorFormatter = (error) => {
  return Object.entries(error).reduce(
    (state, [k, { msg }]) => ({ ...state, [k]: msg }),
    {}
  )
}

/*
@ desc: Array where add value in last and store number of values if exists remove from first.
@ param [:any] - value to be added last
@ param [:array] - Main array to work with
@ param [:number] - Number of value will be stored inside array.
@ return [:array] - Return modified array
 */
const lifoArray = (inValue, array, numOfStore) => {
  let newArray = [...array, inValue]
  return newArray.slice(-numOfStore)
}

module.exports = {
  expressValidatorErrorFormatter,
  lifoArray,
}
