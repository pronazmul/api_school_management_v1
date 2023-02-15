const yup = require('yup')
const { addAddressSchema } = require('./addressSchema')
const { mobile } = require('./regexp')

const createSupplierSchema = yup.object().shape({
  name: yup.string().required('Shipper Name is Required!'),
  contractName: yup.string().required('Contract Name is Required'),
  mobile: yup
    .string()
    .matches(mobile, 'Invalid Mobile Number!')
    .required('Mobile Number is Required!'),
  address: addAddressSchema,
})

const updateSupplierSchema = yup.object().shape({
  name: yup.string().optional(),
  contractName: yup.string().optional(),
  mobile: yup.string().optional().matches(mobile, 'Invalid Mobile Number!'),
})

module.exports = { createSupplierSchema, updateSupplierSchema }
