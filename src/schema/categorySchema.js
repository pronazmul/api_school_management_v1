const yup = require('yup')

const createCategorySchema = yup.object().shape({
  name: yup.string().required('Category Name is Required!'),
})

const updateCategorySchema = yup.object().shape({
  name: yup.string().optional(),
})

module.exports = {
  createCategorySchema,
  updateCategorySchema,
}
