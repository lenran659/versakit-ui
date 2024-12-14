<script setup lang="ts">
import { VerButton, VerRow } from 'versakit-ui'
</script>

<template>
  <ver-row>
    <VerButton style="margin: 0.5rem" circle icon="search"></VerButton>
    <VerButton
      style="margin: 0.5rem"
      circle
      type="success"
      icon="checkmark-outline"
    ></VerButton>

    <VerButton
      style="margin: 0.5rem"
      circle
      type="error"
      icon="trash-outline"
    ></VerButton>
  </ver-row>
</template>
