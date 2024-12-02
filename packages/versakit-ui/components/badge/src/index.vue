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
import type { BadgeProps } from './type'

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

<style lang="scss" scoped>
@use '../../../style/color/index.scss' as *;

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
  line-height: 20px;
  font-size: 10px;
  text-align: center;
  border-radius: 10px;
  background-color: $ver-red-6;
  color: $ver-zinc-1;
  user-select: none;
  border-radius: 50%;
  min-width: max-content;
}

.is-normal {
  min-width: 15px;
  height: 15px;
}

.badge.is-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.badge.badge-info {
  background-color: $ver-zinc-6;
}

.badge.badge-warning {
  background-color: $ver-orange-6;
}

.badge.badge-success {
  background-color: $ver-green-6;
}
</style>
