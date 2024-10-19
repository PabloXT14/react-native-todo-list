import { colors } from '@/styles/colors'
import { Check, Trash2 } from 'lucide-react-native'
import { Pressable, Text, View } from 'react-native'
import { styles } from './styles'
import { Button } from '../button'
import type { TaskType } from '@/@types/task'

export type TaskProps = TaskType & {
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

export function Task({
  id,
  description,
  isCompleted,
  onToggle,
  onDelete,
}: TaskProps) {
  return (
    <View style={styles.taskContainer}>
      <View style={styles.taskCheckContainer}>
        <Pressable
          onPress={() => onToggle(id)}
          style={[
            styles.taskCheckCircle,
            isCompleted && styles.taskCheckCircleChecked,
            !isCompleted && styles.taskCheckCircleUnchecked,
          ]}
        >
          {isCompleted && (
            <Check size={12} color={colors.gray[100]} strokeWidth={3} />
          )}
        </Pressable>
      </View>

      <View style={styles.taskTextContainer}>
        <Text
          style={[
            !isCompleted && styles.taskText,
            isCompleted && styles.taskDoneText,
          ]}
        >
          {description}
        </Text>
      </View>

      <View style={styles.trashContainer}>
        <Button variant="secondary" onPress={() => onDelete(id)}>
          <Trash2 size={20} color={colors.gray[300]} />
        </Button>
      </View>
    </View>
  )
}
