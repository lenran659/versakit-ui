<template>
  <ver-alert effect="dark" title="success" type="success" />
  <ver-alert effect="dark" title="info" type="info" />
  <ver-alert effect="dark" title="warning" type="warning" />
  <ver-alert effect="dark" title="danger" type="danger" />
</template>

<script lang="ts" setup>
import { VerAlert } from "../../../packages/versakit-ui/index";
</script>

<style scoped>
.t-alert + .t-alert {
  margin: 10px 0;
}
</style>
