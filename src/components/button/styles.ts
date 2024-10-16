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
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    backgroundColor: 'transparent',
  },
  secondaryFocus: {
    backgroundColor: colors.gray[400],
  },
})
