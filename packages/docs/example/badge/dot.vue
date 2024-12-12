<script setup lang="ts">
import { VerButton, VerBadge, VerRow } from 'versakit-ui'
</script>

<template>
  <ver-row>
    <ver-badge :dot="true">
      <ver-button>comments</ver-button>
    </ver-badge>
    <ver-badge :dot="true" type="danger">
      <ver-button>replies</ver-button>
    </ver-badge>
  </ver-row>
</template>
