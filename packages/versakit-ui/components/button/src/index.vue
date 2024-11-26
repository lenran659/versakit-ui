<template>
  <button :class="Verclass" :disabled="props.disabled">
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
  empty: false,
  line: false,
  disabled: false,
})

const Verclass: any = computed(() => {
  return [
    'ver-btn',
    props.type == '' ? '' : `ver-btn-${props.type}`,
    props.ghost == false ? '' : 'is-ghost',
    props.round == false ? '' : 'is-round',
    props.plain == false ? '' : 'is-plain',
    props.empty == false ? '' : 'is-empty',
    props.line == false ? '' : 'is-line',
    props.disabled == false ? '' : 'is-disabled',
  ]
})
</script>

<style src="./index.scss" lang="scss" scoped></style>
