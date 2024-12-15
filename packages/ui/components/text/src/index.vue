<template>
  <span :class="VerClass">
    <slot></slot>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { TextProps } from '../type/index'

defineOptions({ name: 'VerText' })

const props = withDefaults(defineProps<TextProps>(), {
  type: 'info',
  size: 'md',
  truncated: false,
})

const VerClass = computed(() => {
  return [
    'ver-text',
    props.type == 'info' ? 'ver-text-info' : `ver-text-${props.type}`,
    props.size == 'md' ? '' : `is-${props.size}`,
    props.truncated == false ? '' : 'is-truncated',
  ]
})
</script>

<style src="../style/index.scss" lang="scss" scoped></style>
