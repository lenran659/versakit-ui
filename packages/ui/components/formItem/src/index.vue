<template>
  <div class="ver-form-item">
    <label :style="labelStyle" class="ver-form-item_label">
      {{ props.label }}
    </label>
    <div class="ver-form-item_content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue'
import type { FormItemProps } from '../type/index'

defineOptions({ name: 'VerFormItem' })

const props = withDefaults(defineProps<FormItemProps>(), {
  label: '',
})

const form = inject<any>('form')
const labelStyle = computed(() => {
  return {
    width: form.labelWidth,
  }
})
</script>

<style lang="scss" src="../style/index.scss" scoped></style>
