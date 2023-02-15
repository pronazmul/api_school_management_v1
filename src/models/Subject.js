// Required Packeges
let mongoose = require('mongoose')
let uniqueValidator = require('mongoose-unique-validator')

const SubjectSchema = mongoose.Schema(
  {
    subject_name: String,
    teacher_in_charge: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Teacher',
    },
    syllabus: [String],
  },
  { timestamps: true, versionKey: false }
)
//

// Integrate MOngoose Unique Validoator Plugin
SubjectSchema.plugin(uniqueValidator, {
  message: '{VALUE} Already Exists!',
})

// Make Modelresult
const Subject = mongoose.model('Subject', SubjectSchema)

// Export Model
module.exports = Subject
