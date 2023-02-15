/**
 *
 * @param {Object} obj To be Filtered
 * @param {Array} array Contains Object Property Will be Returned
 * @return {Object} Keys contains array will be returned
 */
const filterObjectByValues = (obj, array) => {
  console.log({ obj, array })
  return Object.entries(obj).reduce(
    (state, [k, v]) =>
      array.includes(k) ? { ...state, [k]: v } : { ...state },
    {}
  )
}

module.exports = { filterObjectByValues }
