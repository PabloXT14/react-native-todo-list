import { FlatList, View } from 'react-native'
import { createId } from '@paralleldrive/cuid2'

import { TodoLogo } from '@/assets/todo-logo'
import { colors } from '@/styles/colors'

import { styles } from './styles'

import { Skeleton } from 'moti/skeleton'
import type { ComponentProps } from 'react'

type MotiSkeletonProps = ComponentProps<typeof Skeleton>

export function HomeSkeleton() {
  const defaultSkeletonProps: MotiSkeletonProps = {
    show: true,
    colorMode: 'dark',
    radius: 8,
    // colors: [colors.gray[400], colors.gray[500], colors.gray[700]],
    transition: {
      type: 'timing',
    },
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
          {/* INPUT SKELETON */}
          <Skeleton {...defaultSkeletonProps} height={54} width={300} />

          {/* ADD BUTTON SKELETON */}
          <Skeleton {...defaultSkeletonProps} width={52} height={52} />
        </View>

        {/* TASKS SECTION */}
        <View style={styles.tasks}>
          <View style={styles.tasksHeader}>
            {/* CREATED TASKS SKELETON */}
            <Skeleton {...defaultSkeletonProps} width={100} height={32} />

            {/* COMPLETED TASKS SKELETON */}
            <Skeleton {...defaultSkeletonProps} width={100} height={32} />
          </View>

          <FlatList
            data={Array.from({ length: 10 })}
            keyExtractor={item => createId()}
            renderItem={({ item }) => (
              // TASK SKELETON
              <Skeleton {...defaultSkeletonProps} height={52} width={'100%'} />
            )}
            contentContainerStyle={styles.tasksList}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  )
}
