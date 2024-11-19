<template>
  <div :class="tClass">
    <textarea ref="textareaRef" :disabled="props.disabled" :placeholder="placeholder" :maxlength="maxlength" :value="modelValue" @input="input" />
    <div class="maxlength-box" v-if="maxlength != undefined && maxlength > 0">
      {{ `${n}/${maxlength}` }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
const emit = defineEmits(["update:modelValue", "input"]);

const props = defineProps({
  disabled: Boolean,
  placeholder: String,
  modelValue: String,
  maxlength: Number,
});

const n = ref(props.modelValue?.length || 0);
const textareaRef = ref();
const input = () => {
  emit("update:modelValue", textareaRef.value.value);
  n.value = textareaRef.value.value.length;
};

const tClass = computed(() => {
  return ["t-textarea", props.disabled == false ? "" : "is-disable"];
});
</script>

<style lang="scss" scoped>
@use "../../../style/color/index.scss" as *;

.t-textarea {
  width: auto;
  height: auto;
  display: inline-block;
  overflow: hidden;
  position: relative;
  textarea {
    width: 100%;
    height: 100%;
    padding: 0;
    outline: none;
    border: 1px solid $ver-zinc-3;
    transition: all 0.2s ease;
    border-radius: 3px;
    padding: 8px 8px 10px 8px;
    box-sizing: border-box;
    font-size: 14px;
    color: #606266;
    font-family: auto;
    &:focus,
    &:active,
    &:focus-visible {
      border: 1px solid $ver-violet-6;
    }
    &:focus-visible {
      border: 1px solid $ver-violet-6;
    }

    .dark & {
      color: $ver-zinc-1;
      border-color: $ver-zinc-9;

      &:focus,
      &:active,
      &:focus-visible {
        border: 1px solid $ver-violet-6;
      }
      &:focus-visible {
        border: 1px solid $ver-violet-6;
      }
    }
  }
}

.maxlength-box {
  font-size: 14px;
  color: #c4c4c4;
  position: absolute;
  bottom: 10px;
  right: 10px;
}

textarea::placeholder {
  color: #c6c8cc;
  font-size: 12px;
}

.t-textarea.is-disable {
  textarea {
    cursor: not-allowed;
    color: #c3bfbf;
    &:focus,
    &:active,
    &:focus-visible {
      border: 1px solid #dcdfe6f6;
    }
    &:focus-visible {
      border: 1px solid #dcdfe6f6;
    }
  }
  .maxlength-box {
    color: #c3bfbf;
  }
}
</style>
