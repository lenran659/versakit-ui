<script setup lang="ts">
import { VerPanel } from '@versakit/ui'
</script>

<template>
  <div>
    <VerPanel v-ripple="{ duration: 800, color: '#c4b5fd' }">Primary</VerPanel>

    <VerPanel v-ripple="{ duration: 800, color: '#86efac' }">success</VerPanel>

    <VerPanel v-ripple="{ duration: 800, color: '#fdba74' }">warn</VerPanel>

    <VerPanel v-ripple="{ duration: 800, color: '#fca5a5' }">error</VerPanel>
  </div>
</template>
