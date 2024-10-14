import { Text, View } from 'react-native'
import { styles } from './styles'

import { TodoLogo } from '@/assets/todo-logo'
import { Input } from '@/components/input'

export default function Index() {
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TodoLogo />
      </View>

      {/* BODY */}
      <View style={styles.content}>
        <Input placeholder="Adicione uma nova tarefa" />
      </View>
    </View>
  )
}
