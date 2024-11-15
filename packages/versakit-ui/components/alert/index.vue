<template>
  <div :class="tClass" v-show="isShow">
    <div class="t-alert_inner">
      <span>{{ title }}</span>
      <span class="t-alert_closebtn" @click="handClick"> X </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
const isShow = ref(true);

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "",
  },
  effect: {
    type: String,
    default: "light",
  },
});

const tClass = computed(() => {
  return ["t-alert", `t-alert-${props.type}`, props.effect == "light" ? "is-light" : "is-dark"];
});

const handClick = () => {
  isShow.value = false;
};
</script>

<style src="./index.scss" lang="scss" scoped></style>
