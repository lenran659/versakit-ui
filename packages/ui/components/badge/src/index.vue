<template>
  <span class="ver-badge">
    <slot></slot>
    <span
      class="badge"
      :class="[
        VerClass,
        { 'badge-max': props.value === props.max },
        props.dot ? 'is-dot' : 'is-normal',
      ]"
    >
      <slot v-if="!props.dot && props.value === 0" />
      <template v-else>
        <span v-if="props.dot"></span>
        <span v-else-if="props.value > props.max">{{ props.max }}+</span>
        <span v-else>{{ props.value }}</span>
      </template>
    </span>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { BadgeProps } from '../type/index'

// 使用withDefaults为props设置默认值，让组件使用更方便和容错性更好
const props = withDefaults(defineProps<BadgeProps>(), {
  type: 'error',
  max: 99,
  value: 0,
  dot: false,
})

// 根据传入的type计算对应的类名，实现不同类型对应不同背景色等样式效果
const VerClass = computed(() => {
  return `badge-${props.type}`
})
</script>

<style lang="scss" src="../style/index.scss" scoped></style>
