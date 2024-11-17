<template>
  <transition name="fade">
    <div class="ver-dialog_wrapper" v-show="modelValue" @click.self="close">
      <div class="ver-dialog" :style="{ width: width, marginTop: top }">
        <div class="ver-dialog_header">
          <slot name="title">
            <span class="ver-dialog_title">
              {{ title }}
            </span>
          </slot>
          <button class="ver-dialog_headerbtn" @click="close">
            <t-icon name="cross"></t-icon>
          </button>
        </div>
        <div class="ver-dialog_body">
          <slot></slot>
        </div>
        <div class="ver-dialog_footer" v-if="$slots.footer">
          <slot name="footer"> </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
const emit = defineEmits(["update:modelValue"]);

defineProps({
  title: {
    type: String,
    default: "标题",
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
  width: {
    type: String,
    default: "30%",
  },
  top: {
    type: String,
    default: "15vh",
  },
});

const close = () => {
  emit("update:modelValue", false);
};
</script>

<style src="./index.scss" lang="scss" scoped></style>
