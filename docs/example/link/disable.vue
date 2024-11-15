<template>
  <ver-row>
    <ver-link class="mx4" disable>default</ver-link>
    <ver-link class="mx4" disable type="primary">primary</ver-link>
    <ver-link class="mx4" disable type="success">success</ver-link>
    <ver-link class="mx4" disable type="info">info</ver-link>
    <ver-link class="mx4" disable type="warning">warning</ver-link>
    <ver-link class="mx4" disable type="danger">danger</ver-link>
  </ver-row>
</template>

<script setup lang="ts">
import { VerRow, VerLink } from "../../../packages/versakit-ui/index";
</script>

<style scoped>
.mx4 {
  margin: 0px 8px;
}
</style>
