<template>
  <VerForm :model="form">
    <VerFormItem label="ID">
      <VerInput v-model="form.ID" />
    </VerFormItem>
    <VerFormItem label="Label">
      <VerInput v-model="form.label" />
    </VerFormItem>
    <VerFormItem>
      <VerButton type="primary">Submit</VerButton>
    </VerFormItem>
  </VerForm>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { VerForm, VerFormItem, VerInput, VerButton } from 'versakit-ui'

const form = reactive({
  ID: '',
  label: '',
})
</script>

<style scoped></style>
