<template>
  <div class="common-layout">
    <v-container class="is-vertical">
      <v-header>Header</v-header>
      <v-main>Main</v-main>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { VContainer, VHeader, VMain } from '@versakit/ui'
</script>

<style scoped>
.is-vertical {
  flex-direction: column;
}

.v-header {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c6e2ff;
}
.v-main {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ecf5ff;
  height: 150px;
}
</style>
