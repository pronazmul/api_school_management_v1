const yup = require('yup')
const { objectId } = require('./regexp')

const addAddressSchema = yup.object().shape({
  user: yup
    .string()
    .required('User Id is Required!')
    .matches(objectId, 'Invalid User Id!'),
  title: yup.string().optional(),
  addressLine: yup.string().required('Address Line is Required!'),
  postCode: yup.string().required('Post Code is Required'),
  city: yup.string().required('City is Required'),
  country: yup.string().optional(),
})

const updateAddressSchema = yup.object().shape({
  title: yup.string().optional(),
  addressLine: yup.string().optional(),
  postCode: yup.string().optional(),
  city: yup.string().optional(),
  country: yup.string().optional(),
})

module.exports = { addAddressSchema, updateAddressSchema }
