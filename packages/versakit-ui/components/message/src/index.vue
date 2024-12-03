<template>
  <transition name="down" @after-leave="destroy">
    <div :class="VerClass" v-show="isVisable">
      <!-- 根据type的值来动态选择图标 -->
      <VerIcon :color="getIconColor" :name="getIconName" />
      <span class="text">{{ content }}</span>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import type { MessageProps } from './type'
import { VerIcon } from '../../../index'

defineOptions({ name: 'VerMessage' })

// 定义图标类型与对应名称、颜色的映射关系，方便扩展和维护
const iconMap = {
  success: {
    name: 'passed',
    color: 'green',
  },
  danger: {
    name: 'clear',
    color: 'red',
  },
  warning: {
    name: 'warning',
    color: 'orange',
  },
  info: {
    name: 'info',
    color: '#c4c4c4',
  },
}

const isVisable = ref(false)

const props = withDefaults(defineProps<MessageProps>(), {
  type: 'info',
  content: '',
  duration: 0,
  destroy: () => {},
})

const VerClass = computed(() => {
  return ['ver-message']
})

// 根据传入的type获取对应的图标名称
const getIconName = computed(() => {
  return iconMap[props.type]?.name || 'default-icon-name' // 设置默认图标名称，防止不存在的类型情况
})

// 根据传入的type获取对应的图标颜色
const getIconColor = computed(() => {
  return iconMap[props.type]?.color || 'gray' // 设置默认图标颜色，防止不存在的类型情况
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
