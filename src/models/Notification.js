// Required Packeges
let mongoose = require('mongoose')
let uniqueValidator = require('mongoose-unique-validator')

const NotificationSchema = mongoose.Schema(
  {
    title: String,
    message: String,
    date: Date,
  },
  { timestamps: true, versionKey: false }
)
//

// Integrate MOngoose Unique Validoator Plugin
NotificationSchema.plugin(uniqueValidator, {
  message: '{VALUE} Already Exists!',
})

// Make Modelresult
const Notification = mongoose.model('Notification', NotificationSchema)

// Export Model
module.exports = Notification
