<template>
  <span :class="tClass">
    <slot></slot>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { TagProps } from './type'

const props = withDefaults(defineProps<TagProps>(), {
  type: '',
  round: false,
})

const tClass = computed(() => {
  return [
    'ver-tag',
    props.type == '' ? '' : `ver-tag-${props.type}`,
    props.round == false ? '' : 'is-round',
  ]
})
</script>

<style src="./index.scss" lang="scss" scoped></style>
