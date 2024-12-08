<template>
  <transition name="down" @after-leave="destroy">
    <div v-show="isVisable" :class="VerClass">
      <VerIcon :color="iconColor" :name="iconName" />
      <span class="text">{{ content }}</span>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import type { MessageProps } from './type'
import VerIcon from '../../icon/index'

defineOptions({ name: 'VerMessage' })

const isVisable = ref(false)

const props = withDefaults(defineProps<MessageProps>(), {
  type: 'info',
  content: '',
  duration: 0,
  plain: false,
  destroy: () => {},
})

// 根据传入的消息类型，计算对应的图标颜色
const iconColor = computed(() => {
  switch (props.type) {
    case 'success':
      return '#4ade80'
    case 'warning':
      return 'orange'
    case 'error':
      return 'red'
    default:
      return 'gray'
  }
})

// 根据传入的消息类型，计算对应的图标名称
const iconName = computed(() => {
  switch (props.type) {
    case 'success':
      return 'passed'
    case 'warning':
      return 'warning'
    case 'error':
      return 'clear'
    default:
      return 'info'
  }
})

const VerClass = computed(() => {
  return [
    'ver-message',
    props.type == 'info' ? '' : `ver-message-${props.type}`,
    props.plain == false ? '' : `ver-message-${props.type}-plain`,
  ]
})

/**
 * 保证动画展示，需要在 mounted 之后进行展示
 */
onMounted(() => {
  isVisable.value = true
  /**
   * 延迟时间关闭
   */
  setTimeout(() => {
    isVisable.value = false
  }, props.duration)
})
</script>

<style src="./index.scss" lang="scss" scoped></style>
