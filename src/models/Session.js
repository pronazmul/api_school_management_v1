// Required Packeges
let mongoose = require('mongoose')

const SessionSchema = mongoose.Schema(
  {
    user: { type: mongoose.Types.ObjectId, ref: 'people', required: true },
    valid: { type: Boolean, default: true },
    deviceID: String,
    userAgent: String,
  },
  { timestamps: true, versionKey: false }
)

// Make User Modelresult
const Session = mongoose.model('Session', SessionSchema)

// Export User Model
module.exports = Session
