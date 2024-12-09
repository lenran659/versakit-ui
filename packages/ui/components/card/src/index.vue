<template>
  <div :class="VerClass">
    <div class="ver-card-header" v-if="$slots.header">
      <slot name="header"></slot>
    </div>

    <div class="ver-card-body">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { CardProps } from '../type/type'

defineOptions({ name: 'VerCard' })

const props = withDefaults(defineProps<CardProps>(), {
  shadow: 'always',
})

const VerClass = computed(() => {
  return [
    'ver-card',
    props.shadow == 'always'
      ? 'is-shadow-always'
      : props.shadow == 'hover'
        ? 'is-shadow-hover'
        : 'is-shadow-never',
  ]
})
</script>

<style lang="scss" src="../style/index.scss" scoped></style>
