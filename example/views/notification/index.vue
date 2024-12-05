<template>
  <div>
    <div>
      <h3>基本使用</h3>
      <VerButton @click="openNotification">openNotification</VerButton>
      <VerButton @click="openNotificationS">openNotification</VerButton>
      <VerButton @click="openNotificationD">openNotification</VerButton>
      <VerButton @click="openNotificationW">openNotification</VerButton>
    </div>

    <div>
      <h3>Plain</h3>
      <VerButton @click="openNotificationp">openNotification</VerButton>
      <VerButton @click="openNotificationSp">openNotification</VerButton>
      <VerButton @click="openNotificationDp">openNotification</VerButton>
      <VerButton @click="openNotificationWp">openNotification</VerButton>
    </div>

    <div>
      <h3>position</h3>
      <VerButton @click="openNotificationlD">openNotification</VerButton>
      <VerButton @click="openNotificationSD">openNotification</VerButton>
      <VerButton @click="openNotificationDD">openNotification</VerButton>
      <VerButton @click="openNotificationWD">openNotification</VerButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { VerButton, VerNotification } from '../../../packages/versakit-ui/index'

const openNotification = () => {
  VerNotification({
    title: 'title',
    content: 'content',
  })
}

const openNotificationS = () => {
  VerNotification({
    type: 'success',
    title: 'title',
    content: 'content',
  })
}

const openNotificationD = () => {
  VerNotification({
    type: 'error',
    title: 'title',
    content: 'content',
  })
}

const openNotificationW = () => {
  VerNotification({
    type: 'warning',
    title: 'title',
    content: 'content',
  })
}

const openNotificationp = () => {
  VerNotification({
    title: 'title',
    content: 'content',
    plain: true,
  })
}

const openNotificationSp = () => {
  VerNotification({
    type: 'success',
    title: 'title',
    content: 'content',
    plain: true,
  })
}

const openNotificationDp = () => {
  VerNotification({
    type: 'error',
    title: 'title',
    content: 'content',
    plain: true,
  })
}

const openNotificationWp = () => {
  VerNotification({
    type: 'warning',
    title: 'title',
    content: 'content',
    plain: true,
  })
}

const openNotificationlD = () => {
  VerNotification({
    title: 'title',
    content: 'content',
    plain: true,
  })
}

const openNotificationSD = () => {
  VerNotification({
    type: 'success',
    title: 'title',
    content: 'content',
    plain: true,
    position: 'top-left',
  })
}

const openNotificationDD = () => {
  VerNotification({
    type: 'error',
    title: 'title',
    content: 'content',
    plain: true,
    position: 'bottom-left',
  })
}

const openNotificationWD = () => {
  VerNotification({
    type: 'warning',
    title: 'title',
    content: 'content',
    plain: true,
    position: 'bottom-right',
  })
}
</script>
