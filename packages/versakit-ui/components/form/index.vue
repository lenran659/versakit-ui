<template>
  <div class="t-form">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide, ref } from "vue";
const form = ref(null);
provide("form", form);
const props = defineProps({
  model: {
    type: Object,
    required: true,
  },
  labelWidth: {
    type: String,
    default: "80px",
  },
});
</script>
