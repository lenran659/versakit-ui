<template>
  <transition name="slide-fade" @after-leave="props.destroy">
    <div v-show="isVisable" :class="VerClass" :style="positionStyle">
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
import { getLastBottomOffset } from './index'
import VerIcon from '../../icon/index'
import type { NotifivationProps } from '../type/index'

defineOptions({ name: 'VerNotifivation' })

const props = withDefaults(defineProps<NotifivationProps>(), {
  type: 'info',
  plain: false,
  title: '',
  content: '',
  duration: 3000,
  offset: 25,
  position: 'top-right',
  destroy: () => {},
})

const height = ref(0)
// 上一个实例的最下面的坐标数字，第一个是 0
const lastOffset = computed(() => getLastBottomOffset(props.id))
// 这个元素应该使用的 top
const topOffset = computed(() => props.offset + lastOffset.value)

// 这个元素为下一个元素预留的 offset，也就是它最低端 bottom 的 值
const bottomOffset = computed(() => height.value + topOffset.value)

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

// 使用对象展开语法结合类型断言返回样式对象
const positionStyle = computed(() => {
  const baseStyle: Record<string, string> = {}
  switch (props.position) {
    case 'top-right':
      return {
        ...baseStyle,
        position: 'fixed',
        top: topOffset.value + 'px',
        right: '20px',
      } as unknown as Record<string, string>
    case 'top-left':
      return {
        ...baseStyle,
        position: 'fixed',
        top: topOffset.value + 'px',
        left: '20px',
      } as unknown as Record<string, string>
    case 'bottom-right':
      return {
        ...baseStyle,
        position: 'fixed',
        bottom: bottomOffset.value + 'px',
        right: '20px',
      } as unknown as Record<string, string>
    case 'bottom-left':
      return {
        ...baseStyle,
        position: 'fixed',
        bottom: bottomOffset.value + 'px',
        left: '20px',
      } as unknown as Record<string, string>
    default:
      return baseStyle
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

defineExpose({
  bottomOffset,
})
</script>

<style lang="scss" src="../style/index.scss" scoped></style>
