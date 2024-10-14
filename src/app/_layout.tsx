import { Slot } from 'expo-router'
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from '@expo-google-fonts/inter'
import { StatusBar } from 'react-native'

export default function RootLayout() {
  const [loaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  })

  if (!loaded) {
    return null
  }

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Slot />
    </>
  )
}
