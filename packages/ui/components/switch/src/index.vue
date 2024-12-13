<template>
  <label :class="VerClass" @click="handClick">
    <span ref="core" class="ver-switch-core">
      <span class="ver-switch-button"></span>
    </span>
  </label>
</template>

<script setup lang="ts">
// TODO: 多了个尺寸
import { computed } from 'vue'
import type { SwitchPrpops } from '../type/index'

defineOptions({ name: 'VerSwitch' })

const props = withDefaults(defineProps<SwitchPrpops>(), {
  modelValue: false,
  size: 'default',
})

const emit = defineEmits(['input', 'update:modelValue'])

const VerClass = computed(() => {
  return [
    'ver-switch',
    props.modelValue === false ? '' : 'is-checked',
    props.size && props.size !== 'default' ? `is-${props.size}` : '',
  ]
})

const handClick = () => {
  emit('input', !props.modelValue)
  emit('update:modelValue', !props.modelValue)
}
</script>

<style lang="scss" src="../style/index.scss" scoped></style>
