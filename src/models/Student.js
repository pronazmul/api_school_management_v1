// Required Packeges
let mongoose = require('mongoose')
let uniqueValidator = require('mongoose-unique-validator')

const StudentSchema = mongoose.Schema(
  {
    student_name: String,
    roll_number: { type: String, unique: true },
    mobile: { type: String, unique: true },
    email: { type: String, unique: true },
    password: { type: String, required: true },
    avatar: {
      type: String,
      default: `${process.env.APP_URL}/default/avatar.jpg`,
    },
    dob: String,
    gender: { type: String, enum: ['male', 'female', 'others'] },
    blood_group: String,
    address: {
      street: String,
      city: String,
      state: String,
      zip_code: String,
    },
  },
  { timestamps: true, versionKey: false }
)
//

// Integrate MOngoose Unique Validoator Plugin
StudentSchema.plugin(uniqueValidator, {
  message: '{VALUE} Already Exists!',
})

// Make Modelresult
const Student = mongoose.model('Student', StudentSchema)

// Export Model
module.exports = Student
