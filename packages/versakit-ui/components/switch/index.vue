<template>
  <label :class="tClass" @click="handClick">
    <span class="t-switch_core" ref="core">
      <span class="t-switch_button"></span>
    </span>
  </label>
</template>

<script setup lang="ts">
import { computed } from "vue";
const emit = defineEmits(["input", "update:modelValue"]);
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const tClass = computed(() => {
  return ["t-switch", props.modelValue == false ? "" : "is-checked"];
});

const handClick = () => {
  emit("input", !props.modelValue);
  emit("update:modelValue", !props.modelValue);
};
</script>

<style lang="scss" scoped>
.t-switch {
  display: inline-block;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  vertical-align: middle;
  &_core {
    margin: 0;
    display: inline-block;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background-color: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    .t-switch_button {
      position: absolute;
      top: 2.5px;
      left: 1.5px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}

.is-checked {
  .t-switch_core {
    border-color: #409eff;
    background-color: #409eff;
    .t-switch_button {
      transform: translateX(20px);
    }
  }
}
</style>
