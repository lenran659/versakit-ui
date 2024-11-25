<script setup lang="ts">
import { VerAlert } from '@/index.ts'
</script>

<template>
  <div>
    <h2>基本使用</h2>
    <VerRow>
      <div class="gap">
        <VerAlert title="警报"></VerAlert>
      </div>
      <div class="gap">
        <VerAlert title="警报" type="success"></VerAlert>
      </div>
      <div class="gap">
        <VerAlert title="警报" type="info"></VerAlert>
      </div>
      <div class="gap">
        <VerAlert title="警报" type="warning"></VerAlert>
      </div>
      <div class="gap">
        <VerAlert title="警报" type="danger"></VerAlert>
      </div>
    </VerRow>
  </div>
</template>

<style scoped>
.gap {
  margin: 16px 0;
}
</style>
