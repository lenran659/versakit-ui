<script setup lang="ts">
import { computed } from 'vue'
import type { IconsProps } from './type.ts'

defineOptions({ name: 'VerIcon', inheritAttrs: false })

const props = withDefaults(defineProps<IconsProps>(), {
  name: '',
  size: 14,
  color: '#000',
})

const size = props.size + 'px'

const IconName = computed(() => {
  return `#icon-${props.name}`
})
</script>

<template>
  <svg class="ver-icon" aria-hidden="true">
    <use :xlink:href="IconName" :fill="color"></use>
  </svg>
</template>

<style lang="scss" scoped>
.ver-icon {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  vertical-align: bottom;
  font-size: inherit;
  width: v-bind(size);
  height: v-bind(size);
  overflow: hidden;

  .dark & {
    fill: #fff !important;
  }
}
</style>
