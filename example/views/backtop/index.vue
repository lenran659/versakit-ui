<template>
  <div class="red-box"></div>
  <div class="yellow-box"></div>
  <ver-row>
    <ver-backtop>UP</ver-backtop>
  </ver-row>
</template>
<script lang="ts" setup>
import { VerBacktop, VerRow } from '@/index.ts'
</script>
<style scoped>
.red-box {
  height: 500px;
  background-color: red;
}

.yellow-box {
  height: 500px;
  background-color: yellow;
}
</style>
