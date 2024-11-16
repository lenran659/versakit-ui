<template>
  <span :class="VerClass">
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

const VerClass = computed(() => {
  return [
    "ver-text",
    props.type == "" ? "" : `ver-text-${props.type}`,
    props.size == "" ? "" : `ver-text-${props.size}`,
    props.truncated == false ? "" : "is-truncated",
  ];
});
</script>

<style src="./index.scss" lang="scss" scoped></style>
