// Required Packeges
let mongoose = require('mongoose')
let uniqueValidator = require('mongoose-unique-validator')

const TeacherSchema = mongoose.Schema(
  {
    teacher_name: String,
    mobile: { type: String, unique: true },
    email: { type: String, unique: true },
    password: { type: String, required: true },
    dob: Date,
    department: String,
    qualifications: [String],
    avatar: {
      type: String,
      default: `${process.env.APP_URL}/default/avatar.jpg`,
    },
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
TeacherSchema.plugin(uniqueValidator, {
  message: '{VALUE} Already Exists!',
})

// Make Modelresult
const Teacher = mongoose.model('Teacher', TeacherSchema)

// Export Model
module.exports = Teacher
