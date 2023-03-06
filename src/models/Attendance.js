// Required Packeges
let mongoose = require('mongoose')
let uniqueValidator = require('mongoose-unique-validator')

const AttendanceSchema = mongoose.Schema(
  {
    date: Date,
    class: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Class',
    },

    attendance: [
      {
        student: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Student',
        },
        status: {
          type: Boolean,
          default: false,
        },
      },
    ],
  },
  { timestamps: true, versionKey: false }
)
//

// Integrate MOngoose Unique Validoator Plugin
AttendanceSchema.plugin(uniqueValidator, {
  message: '{VALUE} Already Exists!',
})

// Make Modelresult
const Attendance = mongoose.model('Attendance', AttendanceSchema)

// Export Model
module.exports = Attendance
