<script setup lang="ts">
import { VerButton, VerBadge, VerRow } from 'versakit-ui'
</script>

<template>
  <ver-row>
    <ver-badge :value="100" :max="99">
      <ver-button>comments</ver-button>
    </ver-badge>
    <ver-badge :value="20" :max="10" type="info">
      <ver-button>replies</ver-button>
    </ver-badge>
  </ver-row>
</template>
