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
    props.type == '' ? '' : `btn-${props.type}`,
    props.ghost == false ? '' : 'is-ghost',
    props.round == false ? '' : 'is-round',
    props.plain == false ? '' : 'is-plain',
    props.text == false ? '' : 'is-text',
    props.shade == false ? '' : 'is-shade',
    props.disabled == false ? '' : 'is-disabled',
    props.size && props.size !== 'default' ? `is-${props.size}` : '',
    props.circle == false ? '' : 'is-circle',
  ]
})
</script>

<style src="../style/index.css" lang="scss" scoped></style>
