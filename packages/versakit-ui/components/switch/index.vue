<template>
  <label :class="VerClass" @click="handClick">
    <span class="ver-switch-core" ref="core">
      <span class="ver-switch-button"></span>
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

const VerClass = computed(() => {
  return ["ver-switch", props.modelValue == false ? "" : "is-checked"];
});

const handClick = () => {
  emit("input", !props.modelValue);
  emit("update:modelValue", !props.modelValue);
};
</script>

<style lang="scss" scoped>
@use "../../../style/color/index.scss" as *;

.ver-switch {
  display: inline-block;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  vertical-align: middle;
  &-core {
    margin: 0;
    display: inline-block;
    width: 40px;
    height: 20px;
    border: 1px solid $ver-zinc-3;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background-color: $ver-zinc-3;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;

    .dark & {
      border-color: $ver-zinc-7;
      background-color: $ver-zinc-7;
    }

    .ver-switch-button {
      position: absolute;
      top: 2.5px;
      left: 1.5px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: $ver-zinc-1;
    }
  }
}

.is-checked {
  .ver-switch-core {
    border-color: $ver-violet-6;
    background-color: $ver-violet-6;
    .ver-switch-button {
      transform: translateX(20px);
    }
  }
}
</style>
