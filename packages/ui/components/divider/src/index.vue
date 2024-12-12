<template>
  <div
    class="ver-divider"
    :class="{ 'ver-vertical': props.direction === 'vertical' }"
    :style="{
      'justify-content': props.position,
      'border-top': `1px ${props.line} #dcdfe6`,
    }"
  >
    <div class="ver-divider-title" v-if="props.position">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { DividerProps } from '../type/index'

defineOptions({ name: 'VerDivider' })

const props = withDefaults(defineProps<DividerProps>(), {
  line: 'solid',
  position: 'left',
  direction: 'horizontal',
})
</script>

<style lang="scss" scoped src="../style/index.scss"></style>
