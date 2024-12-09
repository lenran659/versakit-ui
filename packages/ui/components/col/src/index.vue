<template>
  <div
    class="ver-col"
    :style="{
      width: width,
      marginLeft: offset,
    }"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { ColProps } from '../type/index'

defineOptions({ name: 'VerCol' })

const props = withDefaults(defineProps<ColProps>(), {
  span: 24,
  offset: 0,
})

const width = ref(
  props.span <= 24
    ? props.span % 1 == 0
      ? (100 / 24) * props.span + '%'
      : ''
    : '',
)

const offset = ref(
  props.offset <= 24
    ? props.offset % 1 == 0
      ? (100 / 24) * props.offset + '%'
      : ''
    : '',
)
</script>

<style scoped src="../stye/index.scss" lang="scss"></style>
