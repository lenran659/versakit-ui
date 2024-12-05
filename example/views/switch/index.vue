<template>
  <VerSwitch v-model="value" size="small" />
  <VerSwitch v-model="value" />
  <VerSwitch v-model="value" size="large" />
</template>

<script lang="ts" setup>
import { VerSwitch } from '@/index.ts'
import { ref } from 'vue'

const value = ref(false)
</script>
