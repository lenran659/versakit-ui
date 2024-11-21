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
import type { FormItemProps } from './type'

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

<style lang="scss" scoped>
.ver-form-item {
  margin-bottom: 25px;
  .ver-form-item_label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  .ver-form-item_content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    overflow: hidde;
  }
}
</style>
