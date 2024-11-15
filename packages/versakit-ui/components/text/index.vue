<template>
  <span :class="tClass">
    <slot></slot>
  </span>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "",
  },
  size: {
    type: String,
    default: "",
  },
  truncated: {
    type: Boolean,
    default: false,
  },
});

const tClass = computed(() => {
  return [
    "t-text",
    props.type == "" ? "" : `t-text-${props.type}`,
    props.size == "" ? "" : `t-text-${props.size}`,
    props.truncated == false ? "" : "is-truncated",
  ];
});
</script>

<style src="./index.scss" lang="scss" scoped></style>
