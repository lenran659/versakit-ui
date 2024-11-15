<template>
  <VerSwitch v-model="value" />
</template>

<script lang="ts" setup>
import { VerSwitch } from "../../../packages/versakit-ui/index";
import { ref } from "vue";

const value = ref(false);
</script>
