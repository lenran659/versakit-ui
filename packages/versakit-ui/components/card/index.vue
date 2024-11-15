<template>
  <div :class="tClass">
    <div class="t-card_header" v-if="$slots.header">
      <slot name="header"></slot>
    </div>

    <div class="t-card_body">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps({
  shadow: { type: String, default: "always" },
});

const tClass = computed(() => {
  return ["ver-card", props.shadow == "always" ? "is-shadow-always" : props.shadow == "hover" ? "is-shadow-hover" : "is-shadow-never"];
});
</script>

<style lang="scss" scoped>
.ver-card {
  border-radius: 4px;
  padding: 20px;
  border: 1px solid #e4e7ed;
  background-color: #fff;
  overflow: hidden;
  transition: 0.3s;
}

.ver-card.is-shadow-always {
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
}

.ver-card.is-shadow-never {
  box-shadow: none;
}

.ver-card.is-shadow-hover {
  &:hover {
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
  }
}

.t-card_header {
  padding: calc(20px - 2px) 20px;
  border-bottom: 1px solid #e4e7ed;
}

.t-card_body {
  padding: 20px;
}
</style>
