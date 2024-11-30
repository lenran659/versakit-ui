<template>
  <span class="ver-badge">
    <slot></slot>
    <span
      class="badge"
      :class="[VerClass, { 'badge-max': props.value === props.max }]"
    >
      <slot v-if="!props.dot && props.value === 0" />
      <template v-else>
        <span v-if="props.dot" class="badge-dot"></span>
        <span v-else-if="props.value > props.max">{{ props.max }}+</span>
        <span v-else>{{ props.value }}</span>
      </template>
    </span>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { BadgeProps } from './type'

// 使用withDefaults为props设置默认值，让组件使用更方便和容错性更好
const props = withDefaults(defineProps<BadgeProps>(), {
  type: 'danger',
  max: 99,
  value: 0,
  dot: false,
})

// 根据传入的type计算对应的类名，实现不同类型对应不同背景色等样式效果
const VerClass = computed(() => {
  return `badge-${props.type}`
})
</script>

<style scoped>
.ver-badge {
  position: relative;
  display: inline-block;
}

.badge {
  position: absolute;
  top: -6px;
  right: -10px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 15px;
  height: 15px;
  line-height: 20px;
  font-size: 12px;
  text-align: center;
  border-radius: 10px;
  background-color: #f56c6c;
  color: #fff;
}

.badge.badge-dot {
  display: inline-block;
  width: 2px;
  height: 2px;
  border-radius: 50%;
  background-color: #f56c6c;
}

.badge.badge-info {
  background-color: #909399;
}

.badge.badge-warning {
  background-color: #e6a23c;
}

.badge.badge-success {
  background-color: #67c23a;
}
</style>
