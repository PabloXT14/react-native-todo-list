import { FlatList, ScrollView, Text, View } from 'react-native'
import { PlusCircle } from 'lucide-react-native'
import { createId } from '@paralleldrive/cuid2'

import { TodoLogo } from '@/assets/todo-logo'
import { Input } from '@/components/input'
import { Button } from '@/components/button'
import { colors } from '@/styles/colors'

import { styles } from './styles'
import { ClipBoardIcon } from '@/assets/clipboard-icon'
import type { TaskType } from '@/@types/task'
import { useState } from 'react'
import { Task } from '@/components/task'

export default function Index() {
  const [tasks, setTasks] = useState<TaskType[]>([])
  const [taskDescription, setTaskDescription] = useState('')

  function handleAddTask(description: string) {
    if (!description.trim()) return

    const newTask: TaskType = {
      id: createId(),
      description: description.trim(),
      isCompleted: false,
      createdAt: new Date(),
    }

    setTasks(prevState => [newTask, ...prevState])
    setTaskDescription('')
  }

  function handleToggleTask(taskId: string) {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        }
      }

      return task
    })

    setTasks(newTasks)
  }

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TodoLogo />
      </View>

      {/* BODY */}
      <View style={styles.content}>
        <View style={styles.form}>
          <Input
            placeholder="Adicione uma nova tarefa"
            value={taskDescription}
            onChangeText={setTaskDescription}
          />
          <Button onPress={() => handleAddTask(taskDescription)}>
            <PlusCircle size={16} color={colors.gray[100]} />
          </Button>
        </View>

        {/* TASKS SECTION */}
        <View style={styles.tasks}>
          <View style={styles.tasksHeader}>
            <View style={styles.createdTasksInfo}>
              <Text style={styles.createdTasksInfoText}>Criadas</Text>
              <Text style={styles.createdTasksInfoNumber}>0</Text>
            </View>

            <View style={styles.completedTasksInfo}>
              <Text style={styles.completedTasksInfoText}>Concluídas</Text>
              <Text style={styles.completedTasksInfoNumber}>0</Text>
            </View>
          </View>

          <FlatList
            data={tasks}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Task {...item} onToggle={handleToggleTask} onDelete={() => {}} />
            )}
            contentContainerStyle={styles.tasksList}
            ListEmptyComponent={
              <View style={styles.tasksListEmpty}>
                <ClipBoardIcon />
                <View style={styles.tasksListEmptyContent}>
                  <Text style={styles.tasksListEmptyTextStrong}>
                    Você ainda não tem tarefas cadastradas
                  </Text>
                  <Text style={styles.tasksListEmptyText}>
                    Crie tarefas e organize seus itens a fazer
                  </Text>
                </View>
              </View>
            }
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  )
}
