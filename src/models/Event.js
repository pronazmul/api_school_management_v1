// Required Packeges
let mongoose = require('mongoose')
let uniqueValidator = require('mongoose-unique-validator')

const EventSchema = mongoose.Schema(
  {
    event_name: String,
    date: Date,
    startsAt: Date,
    endsAt: Date,
    venue: String,
    description: String,
  },
  { timestamps: true, versionKey: false }
)
//

// Integrate MOngoose Unique Validoator Plugin
EventSchema.plugin(uniqueValidator, {
  message: '{VALUE} Already Exists!',
})

// Make Modelresult
const Event = mongoose.model('Event', EventSchema)

// Export Model
module.exports = Event
