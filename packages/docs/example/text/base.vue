<script setup lang="ts">
import { VerRow, VerText } from '@versakit/ui'
</script>

<template>
  <ver-row>
    <ver-text class="mx4">Default</ver-text>
    <ver-text class="mx4" type="primary">Primary</ver-text>
    <ver-text class="mx4" type="success">Success</ver-text>
    <ver-text class="mx4" type="info">Info</ver-text>
    <ver-text class="mx4" type="warning">Warning</ver-text>
    <ver-text class="mx4" type="error">Drange</ver-text>
  </ver-row>
</template>

<style scoped>
.mx4 {
  margin: 0px 10px;
}
</style>
