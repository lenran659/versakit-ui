<template>
  <div :class="tClass">
    <input
      :disabled="disabled"
      :value="modelValue"
      :type="type"
      :placeholder="placeholder"
      @input="input"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  placeholder: {
    type: String,
    default: '',
  },
  modelValue: String || Number,
  disabled: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: 'text',
  },
})

const input = (e: Event) => {
  const target = e.target as HTMLInputElement
  emit('update:modelValue', target.value)
}

const tClass = computed(() => {
  return ['ver-input', props.disabled == false ? '' : 'is-disabled']
})
</script>

<style src="./index.scss" lang="scss" scoped></style>
