// Required Packeges
let mongoose = require('mongoose')
let uniqueValidator = require('mongoose-unique-validator')

const MarkSchema = mongoose.Schema(
  {
    date: Date,
    subject: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Subject',
    },

    marks_records: [
      {
        student: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Student',
        },
        marks_obtained: {
          type: Number,
          min: 0,
          max: 100,
        },
      },
    ],
  },
  { timestamps: true, versionKey: false }
)
//

// Integrate MOngoose Unique Validoator Plugin
MarkSchema.plugin(uniqueValidator, {
  message: '{VALUE} Already Exists!',
})

// Make Modelresult
const Mark = mongoose.model('Mark', MarkSchema)

// Export Model
module.exports = Mark
