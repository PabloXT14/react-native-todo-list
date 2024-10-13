import { colors } from '@/styles/colors'
import { fontFamily } from '@/styles/font-family'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[600],
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: '#fafafa',
  },
})
