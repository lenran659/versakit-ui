<template>
  <div>
    <VerButton @click="openMessage">点击</VerButton>
  </div>
</template>

<script setup lang="ts">
import { VerButton, VerMessage } from '@versakit/ui'

const openMessage = () => {
  VerMessage({
    type: 'info',
    content: '这是一条消息',
    duration: 2000,
  })
}
</script>
