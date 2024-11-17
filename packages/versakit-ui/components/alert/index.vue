<template>
  <div :class="VerClass" v-show="isShow">
    <div class="ver-alert_inner">
      <span>{{ title }}</span>
      <span class="ver-alert_closebtn" @click="handClick"> X </span>
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
});

const VerClass = computed(() => {
  return ["ver-alert", `ver-alert-${props.type}`];
});

const handClick = () => {
  isShow.value = false;
};
</script>

<style src="./index.scss" lang="scss" scoped></style>
