<script setup lang="ts">
import { VerText, VerRow } from '@/index.ts'
</script>

<template>
  <div>
    <ver-row>
      <h2>基本使用</h2>
      <VerText type="primary">Text</VerText>
      <VerText type="success">Text</VerText>
      <VerText type="warning">Text</VerText>
      <VerText type="error">Text</VerText>
    </ver-row>

    <ver-row>
      <ver-text class="mx4" size="large">Large</ver-text>
      <ver-text class="mx4">Default</ver-text>
      <ver-text class="mx4" size="small">Small</ver-text>
    </ver-row>

    <ver-row>
      <ver-text class="w-100px" truncated>
        Self element set width 100px
      </ver-text>
    </ver-row>
  </div>
</template>

<style scoped>
.ver-text {
  margin: 1rem;
}
</style>
