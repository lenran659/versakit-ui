<template>
  <button :class="Verclass" :disabled="props.disabled">
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { ButtonProps } from './type'

const props = withDefaults(defineProps<ButtonProps>(), {
  type: '',
  plain: false,
  round: false,
  disabled: false,
})

const Verclass: any = computed(() => {
  return [
    'ver-btn',
    props.type == '' ? '' : `ver-btn-${props.type}`,
    props.plain == false ? '' : 'is-plain',
    props.round == false ? '' : 'is-round',
    props.disabled == false ? '' : 'is-disable',
  ]
})
</script>

<style src="./index.scss" lang="scss" scoped></style>
