<template>
  <div :class="cls">
    <div class="v-card-header" v-if="$slots.header">
      <slot name="header"></slot>
    </div>

    <div class="v-card-body">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { CardProps } from '../type/index'

defineOptions({ name: 'VCard' })

const props = withDefaults(defineProps<CardProps>(), {
  shadow: 'always',
})

const cls = computed(() => {
  // 根据传入的props.shadow属性值来确定要添加的阴影相关类名
  const shadowClass =
    props.shadow === 'always'
      ? 'is-shadow-always'
      : props.shadow === 'hover'
        ? 'is-shadow-hover'
        : 'is-shadow-never'
  return ['v-card', shadowClass]
})
</script>

<style src="../style/index.css" scoped></style>
