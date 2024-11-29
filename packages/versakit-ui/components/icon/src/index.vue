<script setup lang="ts">
import { computed } from 'vue'
import { IconsProps } from './type.ts'
import '../../../icons/iconfont'

defineOptions({ name: 'VerIcon' })

const props = withDefaults(defineProps<IconsProps>(), {
  name: '',
  size: 14,
  color: '',
})

const size = props.size + 'px'

const IconName = computed(() => {
  return `#icon-${props.name}`
})
</script>

<template>
  <svg class="ver-icon" :fill="color">
    <use :xlink:href="IconName"></use>
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
}
</style>
