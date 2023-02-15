// Required Packeges
let mongoose = require('mongoose')
let uniqueValidator = require('mongoose-unique-validator')
let jwt = require('jsonwebtoken')
let bcrypt = require('bcrypt')

const PeopleSchema = mongoose.Schema(
  {
    name: String,
    username: String,
    email: { type: String, unique: true },
    mobile: { type: String, unique: true },
    avatar: {
      type: String,
      default: `${process.env.APP_URL}/default/avatar.jpg`,
    },
    about: String,
    dob: Date,
    gender: { type: String, enum: ['male', 'female', 'others'] },
  },
  { timestamps: true, versionKey: false }
)
//

// Integrate MOngoose Unique Validoator Plugin
PeopleSchema.plugin(uniqueValidator, {
  message: '{VALUE} Already Exists!',
})

peopleSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, 10)
})

/**
 *@Desc Compare Hashed Password Custom Model Method, Will be Acessible from User Model object.
 *@param(string) User Password to be compared
 *@returns Boolean
 */
peopleSchema.methods.checkPassword = async function (password) {
  return await bcrypt.compare(password, this.password)
}

/**
 *@Desc Make Hash Password
 *@param(string) - Normal Passowrd
 *@returns (string) - Hashed Password
 */
peopleSchema.methods.makeHash = async function (password) {
  return await bcrypt.hash(password, 10)
}

/**
 * @desc mongoose shcema method to create json web token
 * @param {object} userObject
 * @returns jwt token
 */
peopleSchema.methods.generateJwtToken = function (
  userObject,
  expires = process.env.JWT_EXPIRE_TIME
) {
  return jwt.sign(userObject, process.env.JWT_SECRET, {
    expiresIn: expires,
  })
}

// Make User Modelresult
const People = mongoose.model('People', PeopleSchema)

// Export User Model
module.exports = People
