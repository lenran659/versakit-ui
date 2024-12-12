<template>
  <button :class="cls" :disabled="props.disabled" :size="props.size">
    <!-- icon -->
    <ver-icon v-if="icon" :name="icon"></ver-icon>
    <!-- common -->
    <span v-else>
      <slot></slot>
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ButtonProps } from '../type/index'

defineOptions({ name: 'VButton' })

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'primary',
  ghost: false,
  round: false,
  plain: false,
  text: false,
  shade: false,
  disabled: false,
  size: 'default',
  circle: false,
  icon: '',
})

const cls = computed(() => {
  return [
    'v-btn',
    props.type ? `btn-${props.type}` : '',
    props.round ? 'is-round' : '',
    props.ghost ? 'is-ghost' : '',
    props.plain ? 'is-plain' : '',
    props.text ? 'is-text' : '',
    props.shade ? 'is-shade' : '',
    props.disabled ? 'is-disabled' : '',
    props.size && props.size !== 'default' ? `is-${props.size}` : '',
    props.circle ? 'is-circle' : '',
  ].filter(Boolean) // 过滤掉空字符串，避免生成多余的空类名
})
</script>

<style src="../style/index.css" lang="scss" scoped></style>
