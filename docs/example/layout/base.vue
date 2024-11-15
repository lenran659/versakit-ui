<template>
  <ver-row class="mb-4">
    <ver-col :span="24"> <div class="col-box"></div></ver-col>
  </ver-row>
  <ver-row class="mb-4">
    <ver-col :span="12"> <div class="col-box col-box-1"></div></ver-col>
    <ver-col :span="12"> <div class="col-box col-box-2"></div></ver-col>
  </ver-row>
  <ver-row class="mb-4">
    <ver-col :span="8"> <div class="col-box col-box-1"></div></ver-col>
    <ver-col :span="8"> <div class="col-box col-box-2"></div></ver-col>
    <ver-col :span="8"> <div class="col-box col-box-1"></div></ver-col>
  </ver-row>
  <ver-row class="mb-4">
    <ver-col :span="6"> <div class="col-box col-box-1"></div></ver-col>
    <ver-col :span="6"> <div class="col-box col-box-2"></div></ver-col>
    <ver-col :span="6"> <div class="col-box col-box-1"></div></ver-col>
    <ver-col :span="6"> <div class="col-box col-box-2"></div></ver-col>
  </ver-row>
  <ver-row class="mb-4">
    <ver-col :span="4"> <div class="col-box col-box-1"></div></ver-col>
    <ver-col :span="4"> <div class="col-box col-box-2"></div></ver-col>
    <ver-col :span="4"> <div class="col-box col-box-1"></div></ver-col>
    <ver-col :span="4"> <div class="col-box col-box-2"></div></ver-col>
    <ver-col :span="4"> <div class="col-box col-box-1"></div></ver-col>
    <ver-col :span="4"> <div class="col-box col-box-2"></div></ver-col>
  </ver-row>
</template>

<script setup lang="ts">
import { VerRow, VerCol } from "../../../packages/versakit-ui/index";
</script>

<style lang="scss" scoped>
.col-box {
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
