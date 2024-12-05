<script setup lang="ts">
import { VerTag, VerRow } from '@/index.ts'
</script>

<template>
  <div>
    <h2>基本使用</h2>
    <VerRow>
      <VerTag type="primary">Tag1</VerTag>
      <VerTag type="success">Tag1</VerTag>
      <VerTag type="warning">Tag1</VerTag>
      <VerTag type="error">Tag1</VerTag>
      <VerTag type="info">Tag1</VerTag>
    </VerRow>

    <VerRow>
      <VerTag round type="primary">Tag1</VerTag>
      <VerTag round type="success">Tag1</VerTag>
      <VerTag round type="warning">Tag1</VerTag>
      <VerTag round type="error">Tag1</VerTag>
      <VerTag round type="info">Tag1</VerTag>
    </VerRow>

    <VerRow>
      <VerTag plain type="primary">Tag1</VerTag>
      <VerTag plain type="success">Tag1</VerTag>
      <VerTag plain type="warning">Tag1</VerTag>
      <VerTag plain type="error">Tag1</VerTag>
      <VerTag plain type="info">Tag1</VerTag>
    </VerRow>

    <ver-row>
      <VerTag round plain type="primary">Tag1</VerTag>
      <VerTag round plain type="success">Tag1</VerTag>
      <VerTag round plain type="warning">Tag1</VerTag>
      <VerTag round plain type="error">Tag1</VerTag>
      <VerTag round plain type="info">Tag1</VerTag>
    </ver-row>

    <h2>尺寸</h2>
    <VerTag size="large" type="primary">Tag1</VerTag>
    <VerTag type="primary">Tag1</VerTag>
    <VerTag size="small" type="primary">Tag1</VerTag>
  </div>
</template>

<style scoped>
.ver-tag {
  margin: 1rem;
}
</style>
