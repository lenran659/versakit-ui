<template>
  <div>
    <h2>尺寸</h2>
    <VerSwitch v-model="value" size="small" />
    <VerSwitch v-model="value" />
    <VerSwitch v-model="value" size="large" />
  </div>
</template>

<script lang="ts" setup>
import { VerSwitch } from '@/index.ts'
import { ref } from 'vue'

const value = ref(false)
</script>

<style scoped>
.ver-switch {
  margin: 0px 20px;
}
</style>
