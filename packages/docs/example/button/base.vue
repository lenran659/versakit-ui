<script setup lang="ts">
import { VerButton, VerRow } from '@versakit/ui'
</script>

<template>
  <ver-row class="mb-4">
    <ver-button type="primary">按 钮</ver-button>
    <ver-button round type="primary">按 钮</ver-button>
    <ver-button plain type="primary">按 钮</ver-button>
    <ver-button plain round type="primary">按 钮</ver-button>
    <ver-button ghost type="primary">按 钮</ver-button>
    <ver-button ghost round type="primary">按 钮</ver-button>
  </ver-row>

  <ver-row class="mb-4">
    <ver-button type="success">按 钮</ver-button>
    <ver-button round type="success">按 钮</ver-button>
    <ver-button plain type="success">按 钮</ver-button>
    <ver-button plain round type="success">按 钮</ver-button>
    <ver-button ghost type="success">按 钮</ver-button>
    <ver-button ghost round type="success">按 钮</ver-button>
  </ver-row>

  <ver-row class="mb-4">
    <ver-button type="info">按 钮</ver-button>
    <ver-button round type="info">按 钮</ver-button>
    <ver-button plain type="info">按 钮</ver-button>
    <ver-button plain round type="info">按 钮</ver-button>
    <ver-button ghost type="info">按 钮</ver-button>
    <ver-button ghost round type="info">按 钮</ver-button>
  </ver-row>

  <ver-row class="mb-4">
    <ver-button type="warning">按 钮</ver-button>
    <ver-button round type="warning">按 钮</ver-button>
    <ver-button plain type="warning">按 钮</ver-button>
    <ver-button plain round type="warning">按 钮</ver-button>
    <ver-button ghost type="warning">按 钮</ver-button>
    <ver-button ghost round type="warning">按 钮</ver-button>
  </ver-row>

  <ver-row class="mb-4">
    <ver-button type="error">按 钮</ver-button>
    <ver-button round type="error">按 钮</ver-button>
    <ver-button plain type="error">按 钮</ver-button>
    <ver-button plain round type="error">按 钮</ver-button>
    <ver-button ghost type="error">按 钮</ver-button>
    <ver-button ghost round type="error">按 钮</ver-button>
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
