<template>
  <transition name="down" @after-leave="destroy">
    <div v-show="isVisable" :class="VerClass" :style="{ top: topValue }">
      <VerIcon :color="iconColor" :name="iconName" />
      <span class="text">{{ content }}</span>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import type { MessageProps } from '../type/index'
import VerIcon from '../../icon/index'

defineOptions({ name: 'VerMessage' })

const isVisable = ref(false)

const props = withDefaults(defineProps<MessageProps>(), {
  type: 'info',
  content: '',
  duration: 0,
  plain: false,
  destroy: () => {},
  id: '',
})

const topValue = ref('25px')

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
      return 'check-circle-fill'
    case 'warning':
      return 'exclamation-triangle-fill'
    case 'error':
      return 'x-circle-fill'
    default:
      return 'info-circle-fill'
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

<style src="../style/index.scss" lang="scss" scoped></style>
