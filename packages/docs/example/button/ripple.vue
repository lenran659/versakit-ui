<script setup lang="ts">
import { VerButton, VerRow } from '@versakit/ui'
</script>

<template>
  <ver-row class="mb-4">
    <ver-button v-ripple type="primary">按 钮</ver-button>
    <ver-button v-ripple type="success">按 钮</ver-button>
    <ver-button v-ripple type="info">按 钮</ver-button>
    <ver-button v-ripple type="warning">按 钮</ver-button>
    <ver-button v-ripple type="error">按 钮</ver-button>
  </ver-row>
</template>

<style scoped lang="scss">
.mb-4 {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.ver-btn + .ver-btn {
  margin: 0px 6px;
}
</style>
