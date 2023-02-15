const yup = require('yup')
const { objectId } = require('./regexp')

const createProductSchema = yup.object().shape({
  user: yup
    .string()
    .required('UserId is Required!')
    .matches(objectId, 'Invalid User Id!'),
  supplier: yup
    .string()
    .required('Supplier Id is Required!')
    .matches(objectId, 'Invalid Supplier Id!'),
  category: yup
    .string()
    .required('Category Id is Required!')
    .matches(objectId, 'Invalid Category Id!'),
  tags: yup.array().optional().typeError('Tags must be array'),
  reviewsCount: yup
    .number()
    .optional()
    .typeError('Reviews Count Must be Number'),
  rating: yup.number().optional().typeError('Rating Must be Number'),
  name: yup.string().required('Product Name is Required'),
  description: yup.string().optional(),
  brand: yup.string().optional(),
  price: yup
    .number()
    .required('Product Price is Required')
    .typeError('Price Must Be Number'),
  discount: yup.number().optional().typeError('Discount Must Be Number'),
  taxRate: yup.number().optional().typeError('Tax Rate Must Be Number'),
  countInStock: yup
    .number()
    .required('Count In Stock is Required')
    .typeError('Count In Stock Must Be Number'),
  images: yup.array().optional().typeError('Images must be array'),
})

const updateProductSchema = yup.object().shape({
  user: yup.string().optional().matches(objectId, 'Invalid User Id!'),
  supplier: yup.string().optional().matches(objectId, 'Invalid Supplier Id!'),
  category: yup.string().optional().matches(objectId, 'Invalid Category Id!'),
  tags: yup.array().optional().typeError('Tags must be array'),
  reviewsCount: yup
    .number()
    .optional()
    .typeError('Reviews Count Must be Number'),
  rating: yup.number().optional().typeError('Rating Must be Number'),
  name: yup.string().optional(),
  description: yup.string().optional(),
  brand: yup.string().optional(),
  price: yup.number().optional().typeError('Price Must Be Number'),
  discount: yup.number().optional().typeError('Discount Must Be Number'),
  taxRate: yup.number().optional().typeError('Tax Rate Must Be Number'),
  countInStock: yup
    .number()
    .optional()
    .typeError('Count In Stock Must Be Number'),
  images: yup.array().optional().typeError('Images must be array'),
})

module.exports = {
  createProductSchema,
  updateProductSchema,
}
