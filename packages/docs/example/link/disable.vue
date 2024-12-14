<template>
  <ver-row>
    <ver-link class="mx4" disabled>default</ver-link>
    <ver-link class="mx4" disabled type="primary">primary</ver-link>
    <ver-link class="mx4" disabled type="success">success</ver-link>
    <ver-link class="mx4" disabled type="info">info</ver-link>
    <ver-link class="mx4" disabled type="warning">warning</ver-link>
    <ver-link class="mx4" disabled type="error">danger</ver-link>
  </ver-row>
</template>

<script setup lang="ts">
import { VerRow, VerLink } from '@versakit/ui'
</script>

<style scoped>
.mx4 {
  margin: 0px 8px;
}
</style>
