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
import { reactive, ref } from "vue";
import { VerForm, VerFormItem, VerInput, VerButton } from "../../../packages/versakit-ui/index";

const form = reactive({
  ID: "",
  label: "",
});
</script>

<style lang="scss" scoped></style>
