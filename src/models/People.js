// Required Packeges
let mongoose = require('mongoose')
let uniqueValidator = require('mongoose-unique-validator')
let jwt = require('jsonwebtoken')
let bcrypt = require('bcrypt')

const schema = mongoose.Schema(
  {
    name: String,
    email: { type: String, unique: true },
    password: { type: String, required: true },
    mobile: { type: String, unique: true },
    avatar: {
      type: String,
      default: `${process.env.APP_URL}/default/avatar.jpg`,
    },
    dob: Date,
    gender: { type: String, enum: ['male', 'female', 'others'] },
  },
  { timestamps: true, versionKey: false }
)
//

// Integrate MOngoose Unique Validoator Plugin
schema.plugin(uniqueValidator, {
  message: '{VALUE} Already Exists!',
})

// add a pre-save middleware function to hash the password
schema.pre('save', async function (next) {
  const user = this
  if (!user.isModified('password')) {
    return next()
  }
  const hash = await bcrypt.hash(user.password, 10)
  user.password = hash
  next()
})

/**
 *@Desc Compare Hashed Password Custom Model Method, Will be Acessible from User Model object.
 *@param(string) User Password to be compared
 *@returns Boolean
 */
schema.methods.checkPassword = async function (password) {
  return await bcrypt.compare(password, this.password)
}

/**
 *@Desc Make Hash Password
 *@param(string) - Normal Passowrd
 *@returns (string) - Hashed Password
 */
schema.methods.makeHash = async function (password) {
  return await bcrypt.hash(password, 10)
}

/**
 * @desc mongoose shcema method to create json web token
 * @param {object} userObject
 * @returns jwt token
 */
schema.methods.generateJwtToken = function (
  userObject,
  expires = process.env.JWT_EXPIRE_TIME
) {
  return jwt.sign(userObject, process.env.JWT_SECRET, {
    expiresIn: expires,
  })
}

// Make User Modelresult
const People = mongoose.model('People', schema)

// Export User Model
module.exports = People
