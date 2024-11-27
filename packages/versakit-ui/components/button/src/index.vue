<template>
  <button :class="Verclass" :disabled="props.disabled" :size="props.size">
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ButtonProps } from './type'

defineOptions({ name: 'VerButton' })

const props = withDefaults(defineProps<ButtonProps>(), {
  type: '',
  ghost: false,
  round: false,
  plain: false,
  text: false,
  disabled: false,
  size: '',
})

const Verclass: any = computed(() => {
  return [
    'ver-btn',
    props.type == '' ? '' : `ver-btn-${props.type}`,
    props.ghost == false ? '' : 'is-ghost',
    props.round == false ? '' : 'is-round',
    props.plain == false ? '' : 'is-plain',
    props.text == false ? '' : 'is-text',
    props.disabled == false ? '' : 'is-disabled',
    props.size && props.size !== 'medium' ? `is-${props.size}` : '',
  ]
})
</script>

<style src="./index.scss" lang="scss" scoped></style>
