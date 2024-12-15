<template>
  <span :class="tClass">
    <slot></slot>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { TagProps } from '../type/index'

defineOptions({ name: 'VerTag' })

const props = withDefaults(defineProps<TagProps>(), {
  type: 'primary',
  plain: false,
  size: 'md',
  round: false,
})

const tClass = computed(() => {
  return [
    'ver-tag',
    props.type == 'primary' ? 'ver-tag-primary' : `ver-tag-${props.type}`,
    props.round == false ? '' : 'is-round',
    props.plain == false ? '' : 'is-plain',
    props.size == 'md' ? '' : `is-${props.size}`,
  ]
})
</script>

<style src="../style/index.scss" lang="scss" scoped></style>
