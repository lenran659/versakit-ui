<template>
  <VerSwitch v-model="value" />
</template>

<script lang="ts" setup>
import { VerSwitch } from '@versakit/ui'
import { ref } from 'vue'

const value = ref(false)
</script>
