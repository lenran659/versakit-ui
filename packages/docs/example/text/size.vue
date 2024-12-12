<script setup lang="ts">
import { VerRow, VerText } from 'versakit-ui'
</script>

<template>
  <ver-row>
    <ver-text class="mx4" size="large">Large</ver-text>
    <ver-text class="mx4">Default</ver-text>
    <ver-text class="mx4" size="small">Small</ver-text>
  </ver-row>
</template>

<style scoped>
.mx4 {
  margin: 0px 10px;
}
</style>
