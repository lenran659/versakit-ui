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
import type { DividerProps } from './type'

defineOptions({ name: 'VerDivider' })

const props = withDefaults(defineProps<DividerProps>(), {
  line: 'solid',
  position: 'left',
  direction: 'horizontal',
})
</script>

<style lang="scss" scoped>
@use '../../../style/color/index.scss' as *;

.ver-divider {
  width: 100%;
  height: 1px;
  margin: 24px 0;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  border-top: 1px solid $ver-zinc-3;

  .dark & {
    border-top: 1px solid $ver-zinc-7;
  }
}

.ver-vertical {
  display: inline-block;
  width: 1px;
  height: 1em;
  margin: 0 8px;
  border-top: none;
  border-left: 1px solid $ver-zinc-3;
  padding: 0;

  .dark & {
    border-left: 1px solid $ver-zinc-7;
  }
}

.ver-divider-title {
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  background-color: transparent;

  .dark & {
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    background-color: transparent;
  }
}
</style>
