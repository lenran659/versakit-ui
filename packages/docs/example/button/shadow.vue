<script setup lang="ts">
import { VerButton, VerRow } from '@versakit/ui'
</script>

<template>
  <VerRow>
    <VerButton style="margin: 0.5rem" shade>none</VerButton>
    <VerButton style="margin: 0.5rem" shade type="primary">primary</VerButton>
    <VerButton style="margin: 0.5rem" shade type="success">success</VerButton>
    <VerButton style="margin: 0.5rem" shade type="info">info</VerButton>
    <VerButton style="margin: 0.5rem" shade type="warning">warning</VerButton>
    <VerButton style="margin: 0.5rem" shade type="error">danger</VerButton>
  </VerRow>

  <VerRow>
    <VerButton style="margin: 0.5rem" disabled shade>none</VerButton>
    <VerButton style="margin: 0.5rem" disabled shade type="primary">
      primary
    </VerButton>
    <VerButton style="margin: 0.5rem" disabled shade type="success">
      success
    </VerButton>
    <VerButton style="margin: 0.5rem" disabled shade type="info">
      info
    </VerButton>
    <VerButton style="margin: 0.5rem" disabled shade type="warning">
      warning
    </VerButton>
    <VerButton style="margin: 0.5rem" disabled shade type="error">
      danger
    </VerButton>
  </VerRow>
</template>

<style></style>
