import { useState, type ComponentProps, type ReactNode } from 'react'
import { View, TextInput } from 'react-native'
import { styles } from './styles'
import { colors } from '@/styles/colors'

type InputProps = ComponentProps<typeof TextInput>

export function Input({ ...props }: InputProps) {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <TextInput
      style={[styles.input, isFocused && styles.inputFocused]}
      placeholderTextColor={colors.gray[300]}
      cursorColor={colors.gray[100]}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      {...props}
    />
  )
}
