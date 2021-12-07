import React from 'react'
import { StatusBar, View, Text } from 'react-native'
import SceneLayout from 'layouts/SceneLayouts'
import RegForm from '../../forms/registration/RegForm'
import styles from './RegScene.styles'

const RegScene = () => (
  <SceneLayout>
    <StatusBar barStyle="light-content" />
    <Text style={styles.title}>Ekran Rejestracji do aplikacji</Text>
    <View style={styles.signupContainer}>
      <Text>Registration Screen</Text>
      <RegForm />
    </View>
  </SceneLayout>
)

export default RegScene
