<template>
  <div class="flex">
    <div class="mx-4">
      <VerButton @click="openMessage">点击</VerButton>
    </div>
    <div class="mx-4">
      <VerButton type="success" @click="success">success</VerButton>
    </div>
    <div class="mx-4">
      <VerButton type="warning" @click="warning">warning</VerButton>
    </div>
    <div class="mx-4">
      <VerButton type="info" @click="info">info</VerButton>
    </div>
    <div class="mx-4">
      <VerButton type="danger" @click="error">error</VerButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { VerButton, VerMessage } from '@/index.ts'

const openMessage = () => {
  VerMessage({
    type: 'info',
    content: '这是一条消息',
  })
}
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
    type: 'danger',
    content: '这是一条消息',
  })
}
</script>

<style scoped>
.flex {
  display: flex;
}
.mx-4 {
  margin: 0 10px;
}
</style>
