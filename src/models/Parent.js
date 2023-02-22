// Required Packeges
let mongoose = require('mongoose')
let uniqueValidator = require('mongoose-unique-validator')

const ParentSchema = mongoose.Schema(
  {
    parent_name: String,
    mobile: { type: String, unique: true },
    email: { type: String, unique: true },
    password: { type: String, required: true },
    relation: String,
    avatar: {
      type: String,
      default: `${process.env.APP_URL}/default/avatar.jpg`,
    },
    children: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
      },
    ],
  },
  { timestamps: true, versionKey: false }
)
//

// Integrate MOngoose Unique Validoator Plugin
ParentSchema.plugin(uniqueValidator, {
  message: '{VALUE} Already Exists!',
})

// Make Modelresult
const Parent = mongoose.model('Parent', ParentSchema)

// Export Model
module.exports = Parent
