<template>
  <transition name="down" @after-leave="destroy">
    <div v-show="isVisable" :class="VerClass" :style="cssStyle">
      <VerIcon :color="iconColor" :name="iconName" />
      <span class="text">{{ content }}</span>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { getLastBottomOffset } from './index'
import type { MessageProps } from '../type/index'
import VerIcon from '../../icon/index'

defineOptions({ name: 'VerMessage' })

const isVisable = ref(false)

const props = withDefaults(defineProps<MessageProps>(), {
  type: 'info',
  content: '',
  duration: 0,
  offset: 25,
  plain: false,
  destroy: () => {},
})

const height = ref(0)
// 上一个实例的最下面的坐标数字，第一个是 0
const lastOffset = computed(() => getLastBottomOffset(props.id))
// 这个元素应该使用的 top
const topOffset = computed(() => props.offset + lastOffset.value)

// 这个元素为下一个元素预留的 offset，也就是它最低端 bottom 的 值
const bottomOffset = computed(() => height.value + topOffset.value)

const cssStyle = computed(() => ({
  top: topOffset.value + 'px',
}))

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

defineExpose({
  bottomOffset,
})
</script>

<style src="../style/index.scss" lang="scss" scoped></style>
