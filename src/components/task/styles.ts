import { colors } from '@/styles/colors'
import { fontFamily } from '@/styles/font-family'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  taskContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.gray[400],
    backgroundColor: colors.gray[500],
  },
  taskCheckContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  taskCheckCircle: {
    width: 20,
    height: 20,
    borderRadius: 9999,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
  },
  taskCheckCircleUnchecked: {
    borderColor: colors.blue[400],
  },
  taskCheckCircleChecked: {
    borderColor: colors.purple[600],
    backgroundColor: colors.purple[600],
  },
  taskTextContainer: {
    flex: 1,
  },
  taskText: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.gray[100],
  },
  taskDoneText: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.gray[300],
    textDecorationLine: 'line-through',
  },
  trashContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})
