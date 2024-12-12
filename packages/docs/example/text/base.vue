<script setup lang="ts">
import { VText } from '@versakit/ui'
</script>

<template>
  <div>
    <v-text>文本</v-text>
    <v-text type="primary">文本</v-text>
    <v-text type="success">文本</v-text>
    <v-text type="warning">文本</v-text>
    <v-text type="error">文本</v-text>
  </div>
</template>

<style scoped>
.v-text {
  margin: 0px 1rem;
}
</style>
