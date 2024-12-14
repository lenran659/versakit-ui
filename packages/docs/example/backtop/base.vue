<script setup lang="ts">
import { VerBacktop } from '@versakit/ui'
</script>

<template>
  <div>
    <div class="box">
      <span>占位图</span>
    </div>
    <div class="box">
      <span>占位图</span>
    </div>

    <ver-backtop icon="arrow-up-circle-sharp"></ver-backtop>
  </div>
</template>

<style scoped lang="scss">
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
  border: 1px dotted #c4c4c4;
}
</style>
