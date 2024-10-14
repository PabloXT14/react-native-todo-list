import { colors } from '@/styles/colors'
import { fontFamily } from '@/styles/font-family'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  input: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: colors.gray[100],
    width: '100%',
    padding: 16,
    borderRadius: 8,
    backgroundColor: colors.gray[500],
    borderWidth: 1,
    borderColor: colors.gray[700],
  },
  inputFocused: {
    borderColor: colors.purple[600],
  },
})
