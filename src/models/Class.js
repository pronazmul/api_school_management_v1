// Required Packeges
let mongoose = require('mongoose')
let uniqueValidator = require('mongoose-unique-validator')

const ClassSchema = mongoose.Schema(
  {
    class_name: Number,
    teacher_in_charge: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Teacher',
    },
    number_of_students: { type: Number, default: 0 },
    schedule: [
      {
        day: Date,
        start_time: String,
        end_time: String,
      },
    ],
  },
  { timestamps: true, versionKey: false }
)
//

// Integrate MOngoose Unique Validoator Plugin
ClassSchema.plugin(uniqueValidator, {
  message: '{VALUE} Already Exists!',
})

// Make Modelresult
const Class = mongoose.model('Class', ClassSchema)

// Export Model
module.exports = Class
