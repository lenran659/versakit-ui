<script setup lang="ts">
import { VLink } from '@versakit/ui'
</script>

<template>
  <div>
    <v-link>链接</v-link>
    <v-link type="primary">链接</v-link>
    <v-link type="success">链接</v-link>
    <v-link type="warning">链接</v-link>
    <v-link type="error">链接</v-link>
  </div>
</template>

<style scoped>
.v-link {
  margin: 0px 1rem;
}
</style>
