<template>
  <div :class="tClass">
    <textarea
      ref="textareaRef"
      :disabled="props.disabled"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :value="modelValue"
      @input="input"
    />
    <div class="maxlength-box" v-if="maxlength != undefined && maxlength > 0">
      {{ `${n}/${maxlength}` }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import type { TextAreaProps } from '../type/index'

defineOptions({ name: 'VerTextArea' })

const props = withDefaults(defineProps<TextAreaProps>(), {
  disabled: false,
  placeholder: '',
  modelValue: '',
  maxlength: undefined,
})

const n = ref(props.modelValue?.length || 0)
const textareaRef = ref()
const emit = defineEmits(['update:modelValue', 'input'])

const input = () => {
  emit('update:modelValue', textareaRef.value.value)
  n.value = textareaRef.value.value.length
}

const tClass = computed(() => {
  return ['ver-textarea', props.disabled == false ? '' : 'is-disabled']
})
</script>

<style lang="scss" src="../style/index.scss" scoped></style>
