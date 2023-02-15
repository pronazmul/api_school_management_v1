const { emailRegex, passwordRegex, mobileRegEx } = require('./expressions')

/**
 * @desc Email Phone Validatior Function
 * @param {}
 * @returns {Object}
 */
const emailValidator = () => {
  return {
    validator: (value) => emailRegex.test(value),
    message: 'Invalid Email Address!',
  }
}

/**
 * @desc Mobile Phone Validatior Function
 * @param {}
 * @returns {Object}
 */
const phoneNumberValidator = () => {
  return {
    validator: (value) => mobileRegEx.test(value),
    message: 'Invalid Phone Number!',
  }
}

/**
 * @desc Password Validatior Function
 * @param {}
 * @returns {Object}
 */
const passwordValidator = () => {
  return {
    validator: (value) => passwordRegex.test(value),
    message:
      'Password should contain Uppercase, Lowercase and Special Character must be 6 to 15 character long!',
  }
}

/**
 * @desc Enum Matched Function
 * @param {Array} Enum Array
 * @returns {Object}
 */
const enumValidator = (array = []) => {
  return {
    enum: array,
    message: `{VALUE} is not a valid {PATH}`,
  }
}

/**
 * @desc Min Max Validator Function
 * @param {Number} Minimum Number
 * @param {Number} Maximum Number
 * @returns {Object}
 */
const minMaxValidator = (min = 0, max = 5) => {
  return {
    validator: (value) => Boolean(value >= min && value <= max),
    message: `Minimum ${min} and Maximum ${max} is allowed, But got {VALUE}`,
  }
}

/**
 * @desc Mmongoose Validation Error Formatter Function
 * @param {Object} Error Object
 * @returns {Object} Formatted Object
 */
const mongooseErrorFomatter = (error) => {
  return Object.entries(error).reduce(
    (state, [k, { message }]) => ({ ...state, [k]: message }),
    {}
  )
}

/**
 * @desc Multiple Search Query Generator usign Regx
 * @param {string} Search String
 * @param {array} Array of Fields to search
 * @returns {object} Search Query Object
 */

/**
 @demoShape
   {
    $or: [
      { name: { $regex: req.query.keyword, $options: 'i' } },
      { brand: { $regex: req.query.keyword, $options: 'i' } },
      { category: { $regex: req.query.keyword, $options: 'i' } },
    ],
  }
 */

function regxSearchQuery(searchString = '', fieldsArray = []) {
  return {
    $or: fieldsArray.map((v) => ({
      [v]: { $regex: searchString, $options: 'i' },
    })),
  }
}

module.exports = {
  phoneNumberValidator,
  emailValidator,
  passwordValidator,
  minMaxValidator,
  enumValidator,
  mongooseErrorFomatter,
  regxSearchQuery,
}
