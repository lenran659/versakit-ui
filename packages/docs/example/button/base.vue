<script setup lang="ts">
import { VerButton, VerRow } from 'versakit-ui'
</script>

<template>
  <ver-row class="mb-4">
    <ver-button type="primary">主要按钮</ver-button>
    <ver-button round type="primary">主要按钮</ver-button>
    <ver-button plain type="primary">主要按钮</ver-button>
    <ver-button plain round type="primary">主要按钮</ver-button>
  </ver-row>

  <ver-row class="mb-4">
    <ver-button type="success">主要按钮</ver-button>
    <ver-button round type="success">主要按钮</ver-button>
    <ver-button plain type="success">主要按钮</ver-button>
    <ver-button plain round type="success">主要按钮</ver-button>
  </ver-row>

  <ver-row class="mb-4">
    <ver-button type="info">主要按钮</ver-button>
    <ver-button round type="info">主要按钮</ver-button>
    <ver-button plain type="info">主要按钮</ver-button>
    <ver-button plain round type="info">主要按钮</ver-button>
  </ver-row>

  <ver-row class="mb-4">
    <ver-button type="warning">主要按钮</ver-button>
    <ver-button round type="warning">主要按钮</ver-button>
    <ver-button plain type="warning">主要按钮</ver-button>
    <ver-button plain round type="warning">主要按钮</ver-button>
  </ver-row>

  <ver-row class="mb-4">
    <ver-button type="danger">主要按钮</ver-button>
    <ver-button round type="danger">主要按钮</ver-button>
    <ver-button plain type="danger">主要按钮</ver-button>
    <ver-button plain round type="danger">主要按钮</ver-button>
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
