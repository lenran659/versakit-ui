<template>
  <div>
    <VerButton @click="drawer = true">打开抽屉</VerButton>

    <VerDrawer v-model:visible="drawer">
      <span> 我是内容</span>
    </VerDrawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { VerDrawer, VerButton } from "../../../packages/versakit-ui/index";

const drawer = ref(false);
</script>
