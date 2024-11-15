<script setup>
const props = defineProps({
  position: {
    type: String,
    default: "left",
  },
  direction: {
    type: String,
    default: "horizontal",
  },
  line: {
    type: String,
    default: "solid",
  },
});
</script>

<template>
  <div
    class="t-divider"
    :class="{ 't-vertical': direction === 'vertical' }"
    :style="{
      'justify-content': position,
      'border-top': `1px ${line} #dcdfe6`,
    }"
  >
    <div class="t-divider-title" v-if="position">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.t-divider {
  width: 100%;
  height: 1px;
  margin: 24px 0;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
}

.t-vertical {
  display: inline-block;
  width: 1px;
  height: 1em;
  margin: 0 8px;
  border-top: none;
  border-left: 1px solid #dcdfe6;
  padding: 0;
}

.t-divider-title {
  border-left: 20px solid white;
  border-right: 20px solid white;
  background-color: white;
}
</style>
