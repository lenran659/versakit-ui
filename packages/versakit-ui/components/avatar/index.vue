<template>
  <span :class="tClass">
    <img :src="src" />
  </span>
</template>

<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps({
  shape: {
    type: String,
    default: "circle",
  },
  src: {
    type: String,
    default: "",
  },
  size: {
    type: Number,
    default: 50,
  },
});

const size = props.size + "px";

const tClass = computed(() => {
  return ["t-avatar", props.shape == "circle" ? "is-circle" : "is-square"];
});
</script>

<style lang="scss" scoped>
.t-avatar {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  text-align: center;
  overflow: hidden;
  color: #fff;
  width: v-bind(size);
  height: v-bind(size);
  font-size: 14px;
  background-color: #c0c4cc;
  & > img {
    object-fit: cover;
    display: block;
    height: 100%;
    max-width: 100%;
    border-style: none;
  }
}

.t-avatar.is-circle {
  border-radius: 50%;
}

.t-avatar.is-square {
  border-radius: 4px;
}
</style>
