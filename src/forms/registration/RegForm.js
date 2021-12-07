import React from 'react'
import { Button } from 'react-native'

import { Formik } from 'formik'
import TextInputField from 'components/TextInputField'
import regSchema from './regSchema'
import fields from '../fields'

const RegForm = () => (
  <Formik
    validationSchema={regSchema}
    initialValues={{
      fullName: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
    }}
    onSubmit={(values) => console.log(values)}
  >
    {({
      handleChange, handleBlur, handleSubmit, values, errors, isValid,
    }) => (
      <>
        <TextInputField
          name={fields.nick.name}
          placeholder="Nickname"
          onChangeText={handleChange('nick')}
          onBlur={handleBlur('nick')}
          value={values.nick}
          keyboardType="nick"
          errors={errors.nick}
        />
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
          name={fields.phoneNumber.name}
          placeholder="Phone number"
          onChangeText={handleChange('phoneNumber')}
          onBlur={handleBlur('phoneNumber')}
          value={values.phoneNumber}
          keyboardType="numeric"
          errors={errors.phoneNumber}
        />

        <TextInputField
          name={fields.password.name}
          placeholder="Password"
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          value={values.password}
          keyboardType="password"
          errors={errors.password}
        />
        <TextInputField
          name={fields.confirmPassword}
          placeholder="Confirm Password"
          onChangeText={handleChange('confirmPassword')}
          onBlur={handleBlur('confirmPassword')}
          value={values.confirmPassword}
          keyboardType="confirmPassword"
          errors={errors.confirmPassword}
        />
        {/* <Field
                  component={CustomInput}
                  name="fullName"
                  placeholder="Full Name"
                />
                <Field
                  component={CustomInput}
                  name="email"
                  placeholder="Email Address"
                  keyboardType="email-address"
                />
                <Field
                  component={CustomInput}
                  name="phoneNumber"
                  placeholder="Phone Number"
                  keyboardType="numeric"
                />
                <Field
                  component={CustomInput}
                  name="passowrd"
                  placeholder="Password"
                  secureTextEntry
                />
                <Field
                  component={CustomInput}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  secureTextEntry
                /> */}

        <Button onPress={handleSubmit} title="SIGN UP" disabled={!isValid} />
      </>
    )}
  </Formik>
)
export default RegForm
