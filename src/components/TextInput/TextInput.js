import { TextInput as DefaultTextInput } from 'react-native-gesture-handler'
import React from 'react'
import defaultStyles from './TextInput.styles'

const TextInput = ({ ...restProps }) => (
  <DefaultTextInput {...restProps} style={defaultStyles.textInput} />
)

export default TextInput
