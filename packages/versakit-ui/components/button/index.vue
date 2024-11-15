<template>
  <button :class="tClass" :disabled="disable">
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "",
  },
  plain: {
    type: Boolean,
    default: false,
  },
  round: {
    type: Boolean,
    default: false,
  },
  disable: {
    type: Boolean,
    default: false,
  },
});

const tClass = computed(() => {
  return [
    "t-btn",
    props.type == "" ? "" : `t-btn-${props.type}`,
    props.plain == false ? "" : "is-plain",
    props.round == false ? "" : "is-round",
    props.disable == false ? "" : "is-disable",
  ];
});
</script>

<style src="./index.scss" lang="scss" scoped></style>
