import { useState, type ComponentProps } from 'react'
import { Pressable, type StyleProp, type ViewStyle } from 'react-native'
import { styles } from './styles'

type ButtonProps = ComponentProps<typeof Pressable> & {
  variant?: 'primary' | 'secondary'
  style?: StyleProp<ViewStyle>
}

export function Button({
  children,
  variant = 'primary',
  style,
  ...props
}: ButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles[variant],
        pressed && styles[`${variant}Focus`],
        style,
      ]}
      {...props}
    >
      {children}
    </Pressable>
  )
}
