import React from 'react'
import { StatusBar, View, Text } from 'react-native'
import SceneLayout from 'layouts/SceneLayouts'
import LoginForm from 'forms/LoginForm'
import styles from './LoginScene.styles'

const LoginScene = () => (
  <SceneLayout>
    <StatusBar barStyle="light-content" />
    <Text style={styles.title}>Ekran logowania do aplikacji</Text>
    <View style={styles.loginContainer}>
      <Text>Login Screen</Text>
      <LoginForm />
    </View>
  </SceneLayout>
)

export default LoginScene
