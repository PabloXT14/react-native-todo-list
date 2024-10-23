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
  form: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    gap: 8,
    marginBottom: 32,
  },
  tasks: {
    flex: 1,
  },
  tasksHeader: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  createdTasksInfo: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 8,
  },
  createdTasksInfoText: {
    fontSize: 14,
    fontFamily: fontFamily.bold,
    color: colors.blue[400],
  },
  createdTasksInfoNumber: {
    fontSize: 12,
    fontFamily: fontFamily.bold,
    color: colors.gray[200],
    backgroundColor: colors.gray[400],
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 9999,
  },
  completedTasksInfo: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 8,
  },
  completedTasksInfoText: {
    fontSize: 14,
    fontFamily: fontFamily.bold,
    color: colors.purple[400],
  },
  completedTasksInfoNumber: {
    fontSize: 12,
    fontFamily: fontFamily.bold,
    color: colors.gray[200],
    backgroundColor: colors.gray[400],
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 9999,
  },
  tasksList: {
    width: '100%',
    gap: 8,
    paddingBottom: 64,
  },
  tasksListEmpty: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 48,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    borderTopWidth: 1,
    borderColor: colors.gray[400],
  },
  tasksListEmptyContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tasksListEmptyText: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.gray[300],
  },
  tasksListEmptyTextStrong: {
    fontSize: 14,
    fontFamily: fontFamily.bold,
    color: colors.gray[300],
  },
})
