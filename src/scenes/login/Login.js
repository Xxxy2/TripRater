import React from 'react'
import PropTypes from 'prop-types'
import {
  Text, View, StatusBar, Button,
} from 'react-native'

import { TextInput } from 'react-native-gesture-handler'
import { Formik } from 'formik'
import * as yup from 'yup'
import styles from './Login.styles'

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
})

const LoginScreen = () => (
  <View style={styles.root}>
    <StatusBar barStyle="light-content" />
    <Text style={styles.title}>Ekran logowania do aplikacji</Text>
    <View style={styles.loginContainer}>
      <Text>Login Screen</Text>
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => console.log(values)}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
          <>
            <TextInput
              name="email"
              placeholder="Email Address"
              style={styles.textInput}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              keyboardType="email-address"
            />
            {errors.email && (
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>
            )}
            <TextInput
              name="password"
              placeholder="Password"
              style={styles.textInput}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry
            />
            {errors.password && (
              <Text style={{ fontSize: 10, color: 'red' }}>
                {errors.password}
              </Text>
            )}
            <Button onPress={handleSubmit} title="LOGIN" disabled={!isValid} />
          </>
        )}
      </Formik>
    </View>
  </View>
)

LoginScreen.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }),
}

LoginScreen.defaultProps = {
  navigation: { navigate: () => null },
}

export default LoginScreen
