<script setup lang="ts">
import { VerButton, VerRow } from "../../../packages/versakit-ui/index";
</script>

<template>
  <ver-row class="mb-4">
    <ver-button disable>Default</ver-button>
    <ver-button disable type="primary">Primary</ver-button>
    <ver-button disable type="success">Success</ver-button>
    <ver-button disable type="info">Info</ver-button>
    <ver-button disable type="warning">Warning</ver-button>
    <ver-button disable type="danger">Danger</ver-button>
  </ver-row>
  <ver-row class="mb-4">
    <ver-button disable plain>Plain</ver-button>
    <ver-button disable plain type="primary">Primary</ver-button>
    <ver-button disable plain type="success">Success</ver-button>
    <ver-button disable plain type="info">Info</ver-button>
    <ver-button disable plain type="warning">Warning</ver-button>
    <ver-button disable plain type="danger">Danger</ver-button>
  </ver-row>
</template>

<style lang="scss" scoped>
.mb-4 {
  margin-bottom: 1rem;
}
.t-btn + .t-btn {
  margin: 0px 10px;
}
</style>
