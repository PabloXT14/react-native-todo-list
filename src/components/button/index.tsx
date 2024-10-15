import { useState, type ComponentProps } from 'react'
import { Pressable } from 'react-native'
import { styles } from './styles'

type ButtonProps = ComponentProps<typeof Pressable> & {
  variant?: 'primary' | 'secondary'
}

export function Button({
  children,
  style,
  variant = 'primary',
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
