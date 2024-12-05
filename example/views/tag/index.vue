<script setup lang="ts">
import { VerTag } from '@/index.ts'
</script>

<template>
  <div>
    <h2>基本使用</h2>
    <VerTag type="primary">Tag1</VerTag>
    <VerTag type="success">Tag1</VerTag>
    <VerTag type="warning">Tag1</VerTag>
    <VerTag type="error">Tag1</VerTag>

    <VerTag plain type="primary">Tag1</VerTag>
    <VerTag plain type="success">Tag1</VerTag>
    <VerTag plain type="warning">Tag1</VerTag>
    <VerTag plain type="error">Tag1</VerTag>
  </div>
</template>

<style scoped>
.ver-tag {
  margin: 1rem;
}
</style>
