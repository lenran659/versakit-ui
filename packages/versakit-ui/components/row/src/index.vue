<template>
  <div class="ver-row">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
defineOptions({ name: 'VerRow' })
</script>

<style scoped lang="scss">
.ver-row {
  width: 100%;
  height: auto;
  box-sizing: border-box;
}
</style>
