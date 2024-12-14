<template>
  <ver-row>
    <ver-col :span="6" :offset="2">
      <ver-card shadow="always">Always</ver-card>
    </ver-col>
    <ver-col :span="6" :offset="2">
      <ver-card shadow="hover">Hover</ver-card>
    </ver-col>
    <ver-col :span="6" :offset="2">
      <ver-card shadow="never">Never</ver-card>
    </ver-col>
  </ver-row>
</template>

<script lang="ts" setup>
import { VerCard, VerCol, VerRow } from 'versakit-ui'
</script>
