<template>
  <transition name="slide-fade" @after-leave="props.destroy">
    <div v-show="isVisable" :class="VerClass">
      <div class="ver-notification-top">
        <VerIcon :size="25" :color="iconColor" :name="iconName" />
        <h2 class="ver-notification-title">{{ title }}</h2>
      </div>
      <div class="ver-notification-content">
        <span>{{ content }}</span>
      </div>
      <div class="ver-notification-closebtn" @click="handClose">
        <VerIcon name="cross" />
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue'
import { VerIcon } from '../../../index'
import type { NotifivationProps } from './type'

defineOptions({ name: 'VerNotifivation' })

const props = withDefaults(defineProps<NotifivationProps>(), {
  type: 'info',
  plain: false,
  title: '',
  content: '',
  duration: 3000,
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

const isVisable = ref(false)

const handClose = () => {
  isVisable.value = false
}

const VerClass = computed(() => {
  return [
    'ver-notification',
    props.plain == false ? '' : `ver-notification-${props.type}-plain`,
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

<style lang="scss" src="./index.scss" scoped></style>
