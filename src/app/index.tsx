import { Text, View } from 'react-native'
import { styles } from './styles'

import { TodoLogo } from '@/assets/todo-logo'

export default function Index() {
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TodoLogo />
      </View>

      {/* BODY */}
      <View style={styles.content}>
        <Text style={styles.title}>
          Edit app/index.tsx to edit this screen.
        </Text>
      </View>
    </View>
  )
}
