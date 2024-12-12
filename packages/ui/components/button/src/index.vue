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

const CheckIsColor = (colorValue: string) => {
  let type = /^#[0-9a-fA-F]{6}$/
  let re = new RegExp(type)
  if (colorValue.match(re) == null) {
    type =
      /^[rR][gG][Bb][\(]((2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?),){2}(2[0-4]\\d|25[0-5]|[01]?\\d\\d?)[\)]{1}$/
    re = new RegExp(type)
    if (colorValue.match(re) == null) {
      return ''
    } else {
      return colorValue
    }
  } else {
    return colorValue
  }
}

const props = withDefaults(defineProps<ButtonProps>(), {
  type: '',
  ghost: false,
  round: false,
  plain: false,
  text: false,
  shade: false,
  disabled: false,
  size: 'default',
  color: '',
  circle: false,
  icon: '',
})

const Verclass = computed(() => {
  const validColor = CheckIsColor(props.color)

  return [
    'ver-btn',
    props.type == '' ? '' : `ver-btn-${props.type}`,
    props.ghost == false ? '' : 'is-ghost',
    props.round == false ? '' : 'is-round',
    props.plain == false ? '' : 'is-plain',
    props.text == false ? '' : 'is-text',
    props.shade == false ? '' : 'is-shade',
    props.disabled == false ? '' : 'is-disabled',
    props.size && props.size !== 'default' ? `is-${props.size}` : '',
    props.color && validColor !== '' ? `ver-btn-color-${validColor}` : '',
    props.circle == false ? '' : 'is-circle',
  ]
})
</script>

<style src="../style/index.scss" lang="scss" scoped></style>
