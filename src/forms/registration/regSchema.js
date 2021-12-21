import { object, string, ref } from 'yup'

const regSchema = object().shape({
  fullName: string()
    .matches(/(\w.+\s).+/, 'Enter at least 2 names')
    .required('Full name is required'),
  phoneNumber: string()
    .matches(/(01)(\d){8}\b/, 'Enter a valid phone number')
    .required('Phone number is required'),
  email: string()
    .email('Please enter valid email')
    .required('Email is required'),
  password: string()
    .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
    .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
    .matches(/\d/, 'Password must have a number')
    .matches(
      /[!@#$%^&*()\-_"=+{}; :,<.>]/,
      'Password must have a special character',
    )
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
  confirmPassword: string()
    .oneOf([ref('password')], 'Passwords do not match')
    .required('Confirm password is required'),
})

export default regSchema
