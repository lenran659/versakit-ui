<template>
  <span :class="cls">
    <slot></slot>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { TextProps } from '../type/index'

defineOptions({ name: 'VText' })

const props = withDefaults(defineProps<TextProps>(), {
  type: 'info',
  size: 'default',
  truncated: false,
})

const cls = computed(() => {
  return [
    'v-text',
    props.type == 'primary' ? 'text-primary' : `text-${props.type}`,
    props.size == 'default' ? '' : `is-${props.size}`,
    props.truncated == false ? '' : 'is-truncated',
  ]
})
</script>

<style src="../style/index.css" scoped></style>
