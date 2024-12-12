<template>
  <label
    :class="[
      'ver-radio',
      { 'is-checked': label == modelValue, 'is-disabled': disabled },
    ]"
  >
    <span class="ver-radio_input">
      <span class="ver-radio_inner"></span>
      <input
        :disabled="disabled"
        ref="radio"
        class="ver-radio_original"
        :name="name"
        v-model="modelValue"
        :value="props.label"
        type="radio"
      />
    </span>
    <span class="ver-radio_label">
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import type { RadioProps } from '../type/index'

defineOptions({ name: 'VerRadio' })

const radio = ref()
const emit = defineEmits(['update:modelValue'])

const props = withDefaults(defineProps<RadioProps>(), {
  label: '',
  modelValue: null,
  name: '',
  disabled: false,
})

const modelValue = computed({
  get: () => {
    return props.modelValue
  },
  set: (val) => {
    emit('update:modelValue', val)
    // eslint-disable-next-line
    radio.value && (radio.value.checked == modelValue.value) == props.label
  },
})
</script>

<style lang="scss" scoped src="../style/index.scss"></style>
