<script setup lang="ts">
import { VCard } from '@versakit/ui'
</script>

<template>
  <div>
    <v-card style="width: 480px" shadow="always">Always</v-card>
    <v-card style="width: 480px" shadow="hover">Hover</v-card>
    <v-card style="width: 480px" shadow="never">Never</v-card>
  </div>
</template>

<style scoped>
.v-card {
  margin: 1rem 0px;
}
</style>
