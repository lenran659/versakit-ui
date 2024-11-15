<template>
  <div class="common-layout">
    <ver-container class="is-vertical">
      <ver-header>Header</ver-header>
      <ver-main>Main</ver-main>
    </ver-container>
  </div>
</template>

<script setup lang="ts">
import { VerContainer, VerHeader, VerMain } from "../../../packages/versakit-ui/index";
</script>

<style lang="scss" scoped>
.common-layout {
  .is-vertical {
    flex-direction: column;
  }

  .t-header {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #c6e2ff;
  }
  .t-main {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ecf5ff;
    height: 150px;
  }
}
</style>
