<template>
  <div class="ver-badge">
    <slot></slot>
    <!-- 通过上标文本标签实现徽标 -->
    <sup ref="verBadge" :class="badgeClass">
      <template v-if="type !== 'dot'">
        {{ calcValue }}
      </template>
    </sup>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { BadgeProps } from '../type/index.ts'
defineOptions({
  name: 'VerBadge',
})

const props = withDefaults(defineProps<BadgeProps>(), {
  type: 'dot',
})

const calcValue = computed(() => {
  if (typeof props.value === 'number' && props.value > 99) {
    return '99+'
  }
  return props.value
})

const badgeClass = computed(() => {
  const classes = ['ver-badge']
  if (props.type === 'dot') {
    classes.push('ver-badge-dot')
  }
  if (props.type === 'number') {
    classes.push('ver-badge-num')
  }
  if (props.type === 'text') {
    classes.push('ver-badge-text')
  }
  return classes
})
</script>

<style src="../style/index.scss" lang="scss" scoped></style>
