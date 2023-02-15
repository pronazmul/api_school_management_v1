require('dotenv').config()
const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const fromPhone = process.env.TWILIO_FROM_NUMBER
const client = require('twilio')(accountSid, authToken)

/**
 * @desc Twlio Message Sender
 * @param {Object<string, string, number>} param
 * @param {Function<error, success>} callback
 */

const sendMessage = ({ name, body, mobile }, callback) => {
  client.messages
    .create({
      body: 'This is test Message form my Twilio Application!',
      from: fromPhone,
      mediaUrl: [],
      to: '+8801400462433',
    })
    .then((message) => {
      callback(undefined, message)
    })
    .catch((error) => {
      callback(error, undefined)
    })
}

//Module exports

module.exports = { sendMessage }
