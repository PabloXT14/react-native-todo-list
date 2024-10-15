import { colors } from '@/styles/colors'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  primary: {
    width: 52,
    height: 52,
    padding: 18,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: colors.blue[600],
  },
  primaryFocus: {
    backgroundColor: colors.blue[400],
  },
  secondary: {
    backgroundColor: '#04D361',
  },
  secondaryFocus: {},
})
