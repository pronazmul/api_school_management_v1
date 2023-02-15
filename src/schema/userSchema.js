const yup = require('yup')
const { user } = require('../utils/constants')
const { email, mobile, password } = require('./regexp')

const createUserSchema = yup.object().shape({
  name: yup.string().required('Name is Required!'),
  email: yup
    .string()
    .matches(email, 'Invalid Email Address!')
    .required('Email is Required!'),
  mobile: yup
    .string()
    .matches(mobile, 'Invalid Mobile Number!')
    .required('Mobile Number is Required!'),
  password: yup
    .string()
    .matches(password, 'Invalid Password!')
    .required('Password Is Required!'),
})

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .matches(email, 'Authentication Failed')
    .required('Email is Required!'),
  password: yup
    .string()
    .matches(password, 'Authentication Failed')
    .required('Password Is Required!'),
})

const updateUserSchema = yup.object().shape({
  name: yup.string().optional(),
  email: yup.string().optional().matches(email, 'Invalid Email Address!'),
  mobile: yup.string().optional().matches(mobile, 'Invalid Mobile Number!'),
})

module.exports = {
  createUserSchema,
  loginSchema,
  updateUserSchema,
}
