<template>
  <VerSwitch v-model="value" />
</template>

<script lang="ts" setup>
import { VerSwitch } from '@/index.ts'
import { ref } from 'vue'

const value = ref(false)
</script>
