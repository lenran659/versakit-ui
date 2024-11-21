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
const radio = ref()
const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  label: {
    type: [String, Number, Boolean],
    default: '',
  },
  modelValue: null,
  name: {
    type: String,
    default: '',
  },
  disabled: Boolean,
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

<style lang="scss" scoped>
@use '../../style/color/index.scss' as *;

.ver-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-left: 30px;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  .ver-radio_input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .ver-radio_inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.15s ease-in;
      }
    }
    .ver-radio_original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
}

.ver-radio_label {
  font-size: 14px;
  padding-left: 10px;
}

/* 选中样式 */
.ver-radio.is-checked {
  .ver-radio_input {
    .ver-radio_inner {
      border-color: $ver-violet-6;
      background-color: $ver-violet-6;
      &:after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
  .ver-radio_label {
    color: $ver-violet-6;
  }
}

/* 禁止状态 */
.ver-radio.is-disabled {
  cursor: not-allowed;
  .ver-radio_input {
    cursor: not-allowed;
    .ver-radio_inner {
      border-color: #f5f5fa;
      background-color: #e4e7ed;
      &:after {
        background-color: #a8abb2;
        transform: translate(-50%, -50%) scale(1);
      }
    }
    & + .ver-radio_label {
      color: #a8abb2;
    }
  }
}
</style>
