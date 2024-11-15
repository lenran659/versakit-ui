<template>
  <transition name="fade">
    <div class="t-dialog_wrapper" v-show="visible" @click.self="close">
      <div class="t-dialog" :style="{ width: width, marginTop: top }">
        <div class="t-dialog_header">
          <slot name="title">
            <span class="t-dialog_title">
              {{ title }}
            </span>
          </slot>
          <button class="t-dialog_headerbtn" @click="close">
            <t-icon name="cross"></t-icon>
          </button>
        </div>
        <div class="t-dialog_body">
          <slot></slot>
        </div>
        <div class="t-dialog_footer" v-if="$slots.footer">
          <slot name="footer"> </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
const emit = defineEmits(["update:visible"]);
const props = defineProps({
  title: {
    type: String,
    default: "标题",
  },
  visible: {
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
  emit("update:visible", false);
};
</script>

<style src="./index.scss" lang="scss" scoped></style>
