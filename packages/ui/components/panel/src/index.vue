<template>
  <div class="ver-panel" :class="classes">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { PanelProps } from '../type/index.ts'

defineOptions({
  name: 'VerPanel',
})

const props = withDefaults(defineProps<PanelProps>(), {
  shadow: 'always',
})

// border-shadow判断
const classes = computed(() => {
  return [
    'ver-panel',
    props.shadow === 'always'
      ? 'is-shadow-always'
      : props.shadow === 'hover'
        ? 'is-shadow-hover'
        : 'is-shadow-never',
  ]
})
</script>

<style src="../style/index.scss" lang="scss" scoped></style>
