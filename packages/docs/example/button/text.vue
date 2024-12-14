<script setup lang="ts">
import { VerButton, VerRow } from 'versakit-ui'
</script>

<template>
  <VerRow>
    <VerButton text>none</VerButton>
    <VerButton text type="primary">primary</VerButton>
    <VerButton text type="success">success</VerButton>
    <VerButton text type="info">info</VerButton>
    <VerButton text type="warning">warning</VerButton>
    <VerButton text type="error">error</VerButton>
  </VerRow>
  <VerRow>
    <VerButton disabled text>none</VerButton>
    <VerButton disabled text type="primary">primary</VerButton>
    <VerButton disabled text type="success">success</VerButton>
    <VerButton disabled text type="info">info</VerButton>
    <VerButton disabled text type="warning">warning</VerButton>
    <VerButton disabled text type="error">error</VerButton>
  </VerRow>
</template>
