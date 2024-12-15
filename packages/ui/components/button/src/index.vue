<template>
  <button
    :class="Verclass"
    :disabled="props.disabled"
    :size="props.size"
    :color="props.color"
  >
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
import VerIcon from '../../icon/index'
import type { ButtonProps } from '../type/index'

defineOptions({ name: 'VerButton' })

const props = withDefaults(defineProps<ButtonProps>(), {
  type: '',
  ghost: false,
  round: false,
  plain: false,
  text: false,
  shade: false,
  disabled: false,
  size: 'md',
  circle: false,
  icon: '',
})

const Verclass = computed(() => {
  return [
    'ver-btn',
    props.type == '' ? '' : `ver-btn-${props.type}`,
    props.ghost == false ? '' : 'is-ghost',
    props.round == false ? '' : 'is-round',
    props.plain == false ? '' : 'is-plain',
    props.text == false ? '' : 'is-text',
    props.shade == false ? '' : 'is-shade',
    props.disabled == false ? '' : 'is-disabled',
    props.size == 'md' ? '' : `is-${props.size}`,
    props.circle == false ? '' : 'is-circle',
  ]
})
</script>

<style src="../style/index.scss" lang="scss" scoped></style>
