<template>
  <div>
    <h3>基本使用</h3>
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
        <VerButton type="error" @click="error">error</VerButton>
      </div>
    </div>
    <h3>Plain</h3>
    <div class="flex">
      <div class="mx-4">
        <VerButton @click="openMessagePlain">点击</VerButton>
      </div>
      <div class="mx-4">
        <VerButton type="success" @click="successPlain">success</VerButton>
      </div>
      <div class="mx-4">
        <VerButton type="warning" @click="warningPlain">warning</VerButton>
      </div>
      <div class="mx-4">
        <VerButton type="info" @click="infoPlain">info</VerButton>
      </div>
      <div class="mx-4">
        <VerButton type="error" @click="errorPlain">error</VerButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { VerButton, VerMessage } from '../../../packages/versakit-ui/index'

const openMessage = () => {
  VerMessage({
    type: 'info',
    content: '这是一条消息',
  })
}

const openMessagePlain = () => {
  VerMessage({
    type: 'info',
    plain: true,
    content: '这是一条消息',
  })
}

const success = () => {
  VerMessage({
    type: 'success',
    content: '这是一条消息',
  })
}
const successPlain = () => {
  VerMessage({
    type: 'success',
    plain: true,
    content: '这是一条信息',
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

const warningPlain = () => {
  VerMessage({
    type: 'warning',
    content: '这是一条消息',
    plain: true,
  })
}

const infoPlain = () => {
  VerMessage({
    type: 'info',
    content: '这是一条消息',
    plain: true,
  })
}

const errorPlain = () => {
  VerMessage({
    type: 'error',
    content: '这是一条消息',
    plain: true,
  })
}
</script>

<style scoped>
.flex {
  margin: 10px 0px;
  display: flex;
}
.mx-4 {
  margin: 0 10px;
}
</style>
