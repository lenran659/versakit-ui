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
    class="ver-divider"
    :class="{ 'ver-vertical': direction === 'vertical' }"
    :style="{
      'justify-content': position,
      'border-top': `1px ${line} #dcdfe6`,
    }"
  >
    <div class="ver-divider-title" v-if="position">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../../style/color/index.scss" as *;

.ver-divider {
  width: 100%;
  height: 1px;
  margin: 24px 0;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
}

.ver-vertical {
  display: inline-block;
  width: 1px;
  height: 1em;
  margin: 0 8px;
  border-top: none;
  border-left: 1px solid #dcdfe6;
  padding: 0;
}

.ver-divider-title {
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  background-color: transparent;

  .dark & {
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    background-color: transparent;
  }
}
</style>
