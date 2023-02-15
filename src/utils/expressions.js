const emailRegex = /\S+@\S+\.\S+/
const passwordRegex =
  /^(?=.*[0-9])(?=(?:[^A-Z]*[A-Z]){1})(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,15}$/
const mobileRegEx = /(\+088)?-?01[0-9]\d{8}/g
const onlyDigitRegx = /^[0-9]+$/
const onlyCharRegx = /^[A-Z a-z]+$/
const startWith = /@\w+/g

module.exports = {
  emailRegex,
  passwordRegex,
  mobileRegEx,
  onlyDigitRegx,
  onlyCharRegx,
}
