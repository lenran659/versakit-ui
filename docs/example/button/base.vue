<script setup lang="ts">
import { VerButton, VerRow } from "../../../packages/versakit-ui/index";
</script>

<template>
  <ver-row class="mb-4">
    <ver-button>Default</ver-button>
    <ver-button type="primary">Primary</ver-button>
    <ver-button type="success">Success</ver-button>
    <ver-button type="info">Info</ver-button>
    <ver-button type="warning">Warning</ver-button>
    <ver-button type="danger">Danger</ver-button>
  </ver-row>
  <ver-row class="mb-4">
    <ver-button plain>Plain</ver-button>
    <ver-button plain type="primary">Primary</ver-button>
    <ver-button plain type="success">Success</ver-button>
    <ver-button plain type="info">Info</ver-button>
    <ver-button plain type="warning">Warning</ver-button>
    <ver-button plain type="danger">Danger</ver-button>
  </ver-row>
  <ver-row class="mb-4">
    <ver-button round>Round</ver-button>
    <ver-button round type="primary">Primary</ver-button>
    <ver-button round type="success">Success</ver-button>
    <ver-button round type="info">Info</ver-button>
    <ver-button round type="warning">Warning</ver-button>
    <ver-button round type="danger">Danger</ver-button>
  </ver-row>
</template>

<style scoped lang="scss">
.mb-4 {
  margin-bottom: 1rem;
}

.t-btn + .t-btn {
  margin: 0px 6px;
}
</style>
