<template>
  <div>
    <VerButton type="success" @click="success">success</VerButton>
    <VerButton type="warning" @click="warning">warning</VerButton>
    <VerButton type="info" @click="info">info</VerButton>
    <VerButton type="error" @click="error">error</VerButton>
  </div>
</template>

<script setup lang="ts">
import { VerButton, VerMessage } from '@versakit/ui'

const success = () => {
  VerMessage({
    type: 'success',
    content: '这是一条消息',
  })
}
const warning = () => {
  VerMessage({
    type: 'warning',
    content: '这是一条消息',
  })
}

const info = () => {
  VerMessage({
    type: 'info',
    content: '这是一条消息',
  })
}

const error = () => {
  VerMessage({
    type: 'error',
    content: '这是一条消息',
  })
}
</script>

<style scoped>
.ver-btn {
  margin: 0px 10px;
}
</style>
