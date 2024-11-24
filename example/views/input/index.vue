<script setup lang="ts">
import { ref } from 'vue'
import { VerInput } from '../../../packages/versakit-ui/index.ts'

const value = ref('')
</script>

<template>
  <div>
    <h2>基本使用</h2>
    <VerInput placeholder="please input" v-model="value" />
  </div>
</template>
