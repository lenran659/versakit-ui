<template>
  <VerSwitch size="large" v-model="value" />
  <VerSwitch v-model="value" />
  <VerSwitch size="small" v-model="value" />
</template>

<script lang="ts" setup>
import { VerSwitch } from '@versakit/ui'
import { ref } from 'vue'

const value = ref(false)
</script>

<style scoped>
.ver-switch {
  margin: 0px 10px;
}
</style>
