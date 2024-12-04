<template>
  <div>
    <VerButton @click="openNotification">openNotification</VerButton>
  </div>
</template>

<script lang="ts" setup>
import { VerButton, VerNotification } from '../../../packages/versakit-ui/index'

const openNotification = () => {
  VerNotification({
    type: 'info',
    title: 'title',
    plain: true,
    content: 'content',
  })
}
</script>
