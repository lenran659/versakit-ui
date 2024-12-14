<template>
  <div>
    <VerButton @click="drawerLeft = true">基本使用</VerButton>

    <VerDrawer v-model="drawerLeft">
      <span>左边</span>
    </VerDrawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VerDrawer, VerButton } from '@versakit/ui'

const drawerLeft = ref(false)
</script>
