<template>
  <div :class="VerClass">
    <div class="ver-card-header" v-if="$slots.header">
      <slot name="header"></slot>
    </div>

    <div class="ver-card-body">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { CardProps } from './type'

const props = withDefaults(defineProps<CardProps>(), {
  shadow: 'always',
})

const VerClass = computed(() => {
  return [
    'ver-card',
    props.shadow == 'always'
      ? 'is-shadow-always'
      : props.shadow == 'hover'
        ? 'is-shadow-hover'
        : 'is-shadow-never',
  ]
})
</script>

<style lang="scss" scoped>
@use '../../../style/color/index.scss' as *;

.ver-card {
  border-radius: 4px;
  padding: 20px;
  border: 1px solid $ver-zinc-3;
  background-color: $ver-zinc-1;
  overflow: hidden;
  transition: 0.3s;

  .dark & {
    color: $ver-zinc-1;
    background-color: $ver-zinc-9;
    border-color: $ver-zinc-6;
  }
}

.ver-card.is-shadow-always {
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
}

.ver-card.is-shadow-never {
  box-shadow: none;
}

.ver-card.is-shadow-hover {
  &:hover {
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
  }
}

.ver-card-header {
  padding: calc(20px - 2px) 20px;
  border-bottom: 1px solid $ver-zinc-3;

  .dark & {
    border-color: $ver-zinc-7;
  }
}

.ver-card-body {
  padding: 20px;
}
</style>
