<template>
  <span :class="tClass">
    <slot></slot>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: '',
  },
  round: {
    type: Boolean,
    default: false, // round or not. Default to false.
  },
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
