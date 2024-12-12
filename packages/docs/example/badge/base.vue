<script setup lang="ts">
import { VerButton, VerBadge, VerRow } from '@versakit/ui'
</script>

<template>
  <ver-row>
    <ver-badge :value="1">
      <ver-button>comments</ver-button>
    </ver-badge>
    <ver-badge :value="1" type="warning">
      <ver-button>replies</ver-button>
    </ver-badge>
    <ver-badge :value="1" type="success">
      <ver-button>success</ver-button>
    </ver-badge>
  </ver-row>
</template>
