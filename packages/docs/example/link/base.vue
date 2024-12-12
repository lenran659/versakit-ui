<script setup lang="ts">
import { VerRow, VerLink } from '@versakit/ui'
</script>

<template>
  <ver-row>
    <ver-link class="mx4" href="https://www.baidu.com/index.html">
      default
    </ver-link>
    <ver-link class="mx4" type="primary">primary</ver-link>
    <ver-link class="mx4" type="success">success</ver-link>
    <ver-link class="mx4" type="info">info</ver-link>
    <ver-link class="mx4" type="warning">warning</ver-link>
    <ver-link class="mx4" type="error">danger</ver-link>
  </ver-row>
</template>

<style scoped>
.mx4 {
  margin: 0px 8px;
}
</style>
