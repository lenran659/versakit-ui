<script setup lang="ts">
import { VerPanel } from '@versakit/ui'
</script>

<template>
  <div>
    <VerPanel v-ripple="{ duration: 800, backgroundColor: '#c4b5fd' }">
      Primary
    </VerPanel>

    <VerPanel v-ripple="{ duration: 800, backgroundColor: '#86efac' }">
      success
    </VerPanel>

    <VerPanel v-ripple="{ duration: 800, backgroundColor: '#fdba74' }">
      warn
    </VerPanel>

    <VerPanel v-ripple="{ duration: 800, backgroundColor: '#fca5a5' }">
      error
    </VerPanel>
  </div>
</template>
