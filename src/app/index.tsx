import { ScrollView, Text, View } from 'react-native'
import { PlusCircle } from 'lucide-react-native'

import { TodoLogo } from '@/assets/todo-logo'
import { Input } from '@/components/input'
import { Button } from '@/components/button'
import { colors } from '@/styles/colors'

import { styles } from './styles'
import { ClipBoardIcon } from '@/assets/clipboard-icon'

export default function Index() {
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TodoLogo />
      </View>

      {/* BODY */}
      <View style={styles.content}>
        <View style={styles.form}>
          <Input placeholder="Adicione uma nova tarefa" />
          <Button>
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

          <ScrollView style={styles.tasksList}>
            {/* EMPTY */}
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
          </ScrollView>
        </View>
      </View>
    </View>
  )
}
