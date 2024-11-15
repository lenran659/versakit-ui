<template>
  <a :class="tClass" :href="href">
    <span>
      <slot></slot>
    </span>
  </a>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "",
  },
  disable: {
    type: Boolean,
    default: false,
  },
  href: {
    type: String,
    default: "",
  },
});

const tClass = computed(() => {
  return ["ver-link", props.type == "" ? "" : `ver-link-${props.type}`, props.disable == false ? "" : "is-disable"];
});
</script>

<style src="./index.scss" lang="scss" scoped></style>
