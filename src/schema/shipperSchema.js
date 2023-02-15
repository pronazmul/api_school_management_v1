const yup = require('yup')
const { mobile } = require('./regexp')

const createShipper = yup.object().shape({
  name: yup.string().required('Shipper Name is Required!'),
  contractName: yup.string().required('Contract Name is Required'),
  mobile: yup
    .string()
    .matches(mobile, 'Invalid Mobile Number!')
    .required('Mobile Number is Required!'),
})

const updateShipper = yup.object().shape({
  name: yup.string().optional(),
  contractName: yup.string().optional(),
  mobile: yup.string().optional().matches(mobile, 'Invalid Mobile Number!'),
})

module.exports = { createShipper, updateShipper }
