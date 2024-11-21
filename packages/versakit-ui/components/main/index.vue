<template>
  <div class="ver-main">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.ver-main {
  padding: 20px;
  display: block;
  flex: 1;
  overflow: auto;
  flex-basis: auto;
  box-sizing: border-box;
}
</style>
