<template>
  <div class="t-header">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.t-header {
  width: 100%;
  padding: 0 20px;
  height: 60px;
  flex-shrink: 0;
  box-sizing: border-box;
}
</style>
