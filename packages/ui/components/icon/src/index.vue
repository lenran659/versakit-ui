<script setup lang="ts">
import { computed } from 'vue'
import type { IconsProps } from '../type/index'

defineOptions({ name: 'VIcon', inheritAttrs: false })

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
  <svg
    class="v-icon"
    aria-hidden="true"
    :style="{
      width: size,
      height: size,
    }"
  >
    <use :xlink:href="IconName" :fill="color"></use>
  </svg>
</template>

<style scoped src="../style/index.css"></style>
