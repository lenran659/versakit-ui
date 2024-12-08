<template>
  <div class="ver-header">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
defineOptions({ name: 'VerHeader' })
</script>

<style lang="scss" scoped>
.ver-header {
  width: 100%;
  padding: 0 20px;
  height: 60px;
  flex-shrink: 0;
  box-sizing: border-box;
}
</style>
