<template>
  <transition name="fade">
    <div class="t-drawer_wrapper" v-show="visible" @click.self="handleClose">
      <div class="t-drawer">
        <div class="t-drawer_header">
          <span class="t-drawer_title">{{ title }}</span>
          <button class="t-drawer_headerbtn" @click="handleClose">X</button>
        </div>
        <div class="t-drawer_body">
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    default: "标题",
  },
  visible: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:visible"]);

const handleClose = () => {
  emit("update:visible", false);
};
</script>

<style src="./index.scss" lang="scss" scoped></style>
