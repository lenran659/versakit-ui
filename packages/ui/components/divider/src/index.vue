<template>
  <div
    class="v-divider"
    :class="{ 'v-vertical': props.direction === 'vertical' }"
    :style="{
      'justify-content': props.position,
      'border-top': `1px ${props.line} #dcdfe6`,
    }"
  >
    <div class="v-divider-title" v-if="props.position">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { DividerProps } from '../type/index'

defineOptions({ name: 'VDivider' })

const props = withDefaults(defineProps<DividerProps>(), {
  line: 'solid',
  position: 'left',
  direction: 'horizontal',
})
</script>

<style scoped src="../style/index.css"></style>
