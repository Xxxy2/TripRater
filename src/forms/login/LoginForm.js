import React from 'react'
import { Button } from 'react-native'

import { Formik } from 'formik'
import TextInputField from 'components/TextInputField'
import loginSchema from './loginSchema'
import fields from '../fields'

const LoginForm = () => (
  <Formik
    validationSchema={loginSchema}
    initialValues={{
      email: fields.email.initialValue,
      password: '',
    }}
    onSubmit={(values) => console.log(values)}
  >
    {({
      handleChange, handleBlur, handleSubmit, values, errors, isValid,
    }) => (
      <>
        <TextInputField
          name={fields.email.name}
          placeholder="Email Address"
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}
          keyboardType="email-address"
          errors={errors.email}
        />
        <TextInputField
          name={fields.password.name}
          placeholder="Password"
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          value={values.password}
          secureTextEntry
          errors={errors.password}
        />
        <Button onPress={handleSubmit} title="LOGIN" disabled={!isValid} />
      </>
    )}
  </Formik>
)

export default LoginForm
