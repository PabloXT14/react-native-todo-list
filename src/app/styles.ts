import { colors } from '@/styles/colors'
import { fontFamily } from '@/styles/font-family'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[600],
  },
  title: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: '#fafafa',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 173,
    backgroundColor: colors.gray[700],
  },
  headerImage: {
    height: 32,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    marginTop: -28,
  },
})
