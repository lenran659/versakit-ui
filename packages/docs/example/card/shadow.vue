<template>
  <ver-row>
    <ver-card style="width: 480px" shadow="always">Always</ver-card>
    <ver-card style="width: 480px" shadow="hover">Hover</ver-card>
    <ver-card style="width: 480px" shadow="never">Never</ver-card>
  </ver-row>
</template>

<script lang="ts" setup>
import { VerCard, VerRow } from '@versakit/ui'
</script>

<style scoped>
.ver-card {
  margin: 20px 0;
}
</style>
