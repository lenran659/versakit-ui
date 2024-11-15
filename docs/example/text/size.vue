<script setup lang="ts">
import { VerRow, VerText } from "../../../packages/versakit-ui/index";
</script>

<template>
  <ver-row>
    <ver-text class="mx4" size="large">Large</ver-text>
    <ver-text class="mx4">Default </ver-text>
    <ver-text class="mx4" size="small">Small</ver-text>
  </ver-row>
</template>

<style lang="scss" scoped>
.mx4 {
  margin: 0px 10px;
}
</style>
