<template>
  <div>
    <VerButton type="info" @click="info">info</VerButton>
    <VerButton type="success" @click="success">success</VerButton>
    <VerButton type="warning" @click="warning">warning</VerButton>
    <VerButton type="error" @click="error">error</VerButton>
  </div>
</template>

<script lang="ts" setup>
import { VerButton, VerNotification } from '@versakit/ui'

const info = () => {
  VerNotification({
    title: 'title',
    type: 'info',
    plain: true,
    content: 'content',
  })
}

const success = () => {
  VerNotification({
    title: 'title',
    type: 'success',
    plain: true,
    content: 'content',
  })
}

const warning = () => {
  VerNotification({
    title: 'title',
    type: 'warning',
    plain: true,
    content: 'content',
  })
}

const error = () => {
  VerNotification({
    title: 'title',
    type: 'error',
    plain: true,
    content: 'content',
  })
}
</script>

<style scoped>
.ver-btn {
  margin: 0px 10px;
}
</style>
