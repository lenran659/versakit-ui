<script setup lang="ts">
import { ref } from 'vue'
import { VerInput } from '../../../packages/versakit-ui/index.ts'

const value = ref('12312312')
</script>

<template>
  <div>
    <h2>基本使用</h2>
    <VerInput v-model="value" />
  </div>
</template>
