<script setup lang="ts">
import { VerText } from '../../../packages/versakit-ui/index.ts'
</script>

<template>
  <div>
    <h2>基本使用</h2>
    <VerText type="primary">Text</VerText>
    <VerText type="success">Text</VerText>
    <VerText type="warning">Text</VerText>
    <VerText type="danger">Text</VerText>
  </div>
</template>

<style scoped>
.ver-text {
  margin: 1rem;
}
</style>
