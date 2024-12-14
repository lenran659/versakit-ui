<script setup lang="ts">
import { VerButton } from 'versakit-ui'
</script>

<template>
  <span class="mx-2">
    <ver-button class="mx-2" type="primary" size="large">主要按钮</ver-button>
  </span>
  <span class="mx-2">
    <ver-button class="mx-2" type="primary">主要按钮</ver-button>
  </span>
  <span class="mx-2">
    <ver-button class="mx-2" type="primary" size="small">主要按钮</ver-button>
  </span>
</template>

<style>
.mx-2 {
  margin: 0 6px;
}
</style>
