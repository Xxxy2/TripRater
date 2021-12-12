import React from 'react'
import {
  StatusBar, View, Text, Button,
} from 'react-native'
import SceneLayout from 'layouts/SceneLayouts'
import LoginForm from '../../forms/login/LoginForm'
import styles from './LoginScene.styles'
import { colors } from '../../theme'

const LoginScene = ({ navigation }) => (
  <SceneLayout>
    <StatusBar barStyle="light-content" />
    <Text style={styles.title}>Ekran logowania do aplikacji</Text>
    <View style={styles.loginContainer}>
      <Text>Login Screen</Text>
      <LoginForm />
      <Button
        title="Zarejestruj nowe konto"
        color="black"
        align
        backgroundColor={colors.lightPurple}
        onPress={() => {
          navigation.navigate('RegScene', { from: 'LoginScene' })
        }}
      />
    </View>
  </SceneLayout>
)

export default LoginScene
