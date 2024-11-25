<template>
  <span :class="tClass">
    <slot></slot>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { TagProps } from './type'

defineOptions({ name: 'VerTag' })

const props = withDefaults(defineProps<TagProps>(), {
  type: '',
  plain: false,
  round: false,
})

const tClass = computed(() => {
  return [
    'ver-tag',
    props.type == '' ? '' : `ver-tag-${props.type}`,
    props.round == false ? '' : 'is-round',
    props.plain == false ? '' : 'is-plain',
  ]
})
</script>

<style src="./index.scss" lang="scss" scoped></style>
