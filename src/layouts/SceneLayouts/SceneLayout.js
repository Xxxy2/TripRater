import React from 'react'
import { View } from 'react-native'

import styles from './SceneLayout.styles'

const SceneLayout = ({ children }) => (
  <View style={styles.container}>{children}</View>
)

export default SceneLayout
