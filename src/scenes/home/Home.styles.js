import { StyleSheet } from 'react-native'
import { colors } from '../../theme'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGrayPurple,
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 8,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
})
export default styles
