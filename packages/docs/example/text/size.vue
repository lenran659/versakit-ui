<script setup lang="ts">
import { VerRow, VerText } from '@versakit/ui'
</script>

<template>
  <ver-row>
    <ver-text class="mx4" size="lg">lg</ver-text>
    <ver-text class="mx4">md</ver-text>
    <ver-text class="mx4" size="sm">sm</ver-text>
    <ver-text class="mx4" size="xs">xs</ver-text>
  </ver-row>
</template>

<style scoped>
.mx4 {
  margin: 0px 10px;
}
</style>
