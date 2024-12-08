<script setup lang="ts">
import { computed } from 'vue'
import type { IconsProps } from './type.ts'
import { useAsyncComponent } from '@vueuse/core'

defineOptions({ name: 'VerIcon' })

const props = withDefaults(defineProps<IconsProps>(), {
  name: '',
  size: 14,
  color: '#000',
})

const size = props.size + 'px'

// 根据传入的图标名称动态构建SVG文件路径，并使用useAsyncComponent进行异步加载
const IconComponent = computed(() => {
  const iconPath = `../../../icons/${props.name}.svg`
  return useAsyncComponent(() => import(iconPath))
})
</script>

<template>
  <div class="ver-icon">
    <component :is="IconComponent" />
  </div>
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
    fill: #fff;
  }
}
</style>
