let jwt = require('jsonwebtoken')

const sign = (userObject) => {
  return jwt.sign(userObject, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE_TIME,
  })
}

const decode = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    return { valid: true, expired: false, decoded }
  } catch (error) {
    return {
      valid: false,
      expired: error.message === 'jwt expired',
      decoded: null,
    }
  }
}

module.exports = { sign, decode }
