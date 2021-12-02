import TextInput from 'components/TextInput'
import React from 'react'

import { Text } from 'react-native'

const TextInputField = ({ errors, ...restProps }) => (
  <>
    <TextInput {...restProps} />
    {errors && <Text style={{ fontSize: 10, color: 'red' }}>{errors}</Text>}
  </>
)

export default TextInputField
