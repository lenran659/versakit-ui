<template>
  <div class="ver-col">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { ColProps } from './type'

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

<style scoped lang="scss">
.ver-col {
  width: v-bind(width);
  float: left;
  margin-left: v-bind(offset);
}
</style>
