<template>
  <VerRow>
    <VerInput disabled v-model="value" placeholder="Please input" />
  </VerRow>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VerInput, VerRow } from '@versakit/ui'

const value = ref('')
</script>

<style scoped></style>
