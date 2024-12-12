<script setup lang="ts">
import { VerButton, VerRow } from 'versakit-ui'
</script>

<template>
  <ver-row>
    <VerButton style="margin: 0.5rem" circle icon="search"></VerButton>
    <VerButton
      style="margin: 0.5rem"
      circle
      type="success"
      icon="success"
    ></VerButton>

    <VerButton
      style="margin: 0.5rem"
      circle
      type="warning"
      color="white"
      icon="edit"
    ></VerButton>

    <VerButton
      style="margin: 0.5rem"
      circle
      type="danger"
      icon="delete-o"
    ></VerButton>

    <VerButton style="margin: 0.5rem">
      <ver-icon name="delete-o" style="margin: 0px 4px"></ver-icon>
      编辑
    </VerButton>

    <VerButton style="margin: 0.5rem">
      文字
      <ver-icon name="delete-o" style="margin: 0px 4px"></ver-icon>
    </VerButton>
  </ver-row>
</template>
