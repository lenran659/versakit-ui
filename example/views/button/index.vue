<script setup lang="ts">
import { VerButton, VerRow } from '../../../packages/versakit-ui/index.ts'
</script>

<template>
  <div>
    <h2>基本使用</h2>
    <VerRow>
      <VerButton type="primary">按钮</VerButton>
      <VerButton type="success">按钮</VerButton>
      <VerButton type="info">按钮</VerButton>
      <VerButton type="warning">按钮</VerButton>
      <VerButton type="danger">按钮</VerButton>
    </VerRow>

    <VerRow>
      <VerButton plain type="primary">按钮</VerButton>
      <VerButton plain type="success">按钮</VerButton>
      <VerButton plain type="info">按钮</VerButton>
      <VerButton plain type="warning">按钮</VerButton>
      <VerButton plain type="danger">按钮</VerButton>
    </VerRow>
  </div>
</template>

<style scoped>
.ver-btn {
  margin: 1rem 1rem;
}
</style>
