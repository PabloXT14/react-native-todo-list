import { Text, View } from 'react-native'
import { styles } from './styles'

import { TodoLogo } from '@/assets/todo-logo'
import { Input } from '@/components/input'
import { Button } from '@/components/button'
import { PlusCircle } from 'lucide-react-native'
import { colors } from '@/styles/colors'

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
      </View>
    </View>
  )
}
