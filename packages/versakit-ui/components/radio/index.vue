<template>
  <label :class="['t-radio', { 'is-checked': label == modelValue, 'is-disabled': disabled }]">
    <span class="t-radio_input">
      <span class="t-radio_inner"></span>
      <input :disabled="disabled" ref="radio" class="t-radio_original" :name="name" v-model="modelValue" :value="label" type="radio" />
    </span>
    <span class="t-radio_label">
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
const radio = ref();
const emit = defineEmits(["update:modelValue"]);
const props = defineProps({
  label: {
    type: [String, Number, Boolean],
    default: "",
  },
  modelValue: null,
  name: {
    type: String,
    default: "",
  },
  disabled: Boolean,
});

const modelValue = computed({
  get: () => {
    return props.modelValue;
  },
  set: (val) => {
    emit("update:modelValue", val);
    radio.value && (radio.value.checked == modelValue.value) == props.label;
  },
});
</script>

<style lang="scss" scoped>
.t-radio {
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
  .t-radio_input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .t-radio_inner {
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
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.15s ease-in;
      }
    }
    .t-radio_original {
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

.t-radio_label {
  font-size: 14px;
  padding-left: 10px;
}

/* 选中样式 */
.t-radio.is-checked {
  .t-radio_input {
    .t-radio_inner {
      border-color: #409eff;
      background-color: #409eff;
      &:after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
  .t-radio_label {
    color: #409eff;
  }
}

/* 禁止状态 */
.t-radio.is-disabled {
  cursor: not-allowed;
  .t-radio_input {
    cursor: not-allowed;
    .t-radio_inner {
      border-color: #f5f5fa;
      background-color: #e4e7ed;
      &:after {
        background-color: #a8abb2;
        transform: translate(-50%, -50%) scale(1);
      }
    }
    & + .t-radio_label {
      color: #a8abb2;
    }
  }
}
</style>
