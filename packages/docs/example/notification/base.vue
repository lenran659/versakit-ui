<template>
  <div>
    <VerButton @click="openNotification">openNotification</VerButton>
  </div>
</template>

<script lang="ts" setup>
import { VerButton, VerNotification } from '@versakit/ui'

const openNotification = () => {
  VerNotification({
    title: 'title',
    content: 'content',
  })
}
</script>
