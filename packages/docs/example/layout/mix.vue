<template>
  <VerRow class="mb-4">
    <VerCol :span="10"><div class="col-box col-box-1"></div></VerCol>
    <VerCol :span="14">
      <div class="col-box col-box-2"></div>
    </VerCol>
  </VerRow>
  <VerRow class="mb-4">
    <VerCol :span="6"><div class="col-box col-box-1"></div></VerCol>
    <VerCol :span="8"><div class="col-box col-box-2"></div></VerCol>
    <VerCol :span="10"><div class="col-box col-box-1"></div></VerCol>
  </VerRow>
  <VerRow class="mb-4">
    <VerCol :span="4"><div class="col-box col-box-1"></div></VerCol>
    <VerCol :span="16"><div class="col-box col-box-2"></div></VerCol>
    <VerCol :span="4"><div class="col-box col-box-1"></div></VerCol>
  </VerRow>
</template>

<script setup lang="ts">
import { VerRow, VerCol } from '@versakit/ui'
</script>

<style scoped>
.col-box {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  min-height: 36px;
  background-color: #99a9bf;
}

.col-box-1 {
  background-color: #d3dce6;
}

.col-box-2 {
  background-color: #e5e9f2;
}

.mb-4 {
  margin-bottom: 1rem;
}
</style>
