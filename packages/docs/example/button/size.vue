<script setup lang="ts">
import { VerButton } from '@versakit/ui'
</script>

<template>
  <div>
    <span class="mx-2">
      <ver-button class="mx-2" type="primary" size="lg">主要按钮</ver-button>
    </span>
    <span class="mx-2">
      <ver-button class="mx-2" type="primary">主要按钮</ver-button>
    </span>
    <span class="mx-2">
      <ver-button class="mx-2" type="primary" size="sm">主要按钮</ver-button>
    </span>
    <span class="mx-2">
      <ver-button class="mx-2" type="primary" size="sm">主要按钮</ver-button>
    </span>

    <span class="mx-2">
      <ver-button class="mx-2" type="primary" size="xs">主要按钮</ver-button>
    </span>
  </div>
</template>

<style>
.mx-2 {
  margin: 0 6px;
}
</style>
