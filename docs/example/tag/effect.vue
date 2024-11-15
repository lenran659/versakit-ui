<template>
  <div class="box">
    <span>Dark:</span>
    <div class="mx-4">
      <VerTag effect="dark">Tag 1</VerTag>
      <VerTag effect="dark" type="success">Tag 2</VerTag>
      <VerTag effect="dark" type="info">Tag 3</VerTag>
      <VerTag effect="dark" type="warning">Tag 4</VerTag>
      <VerTag effect="dark" type="danger">Tag 5</VerTag>
    </div>
  </div>
  <div class="box">
    <span>Light:</span>
    <div class="mx-4">
      <VerTag>Tag 1</VerTag>
      <VerTag type="success">Tag 2</VerTag>
      <VerTag type="info">Tag 3</VerTag>
      <VerTag type="warning">Tag 4</VerTag>
      <VerTag type="danger">Tag 5</VerTag>
    </div>
  </div>
  <div class="box">
    <span>Plain:</span>
    <div class="mx-4">
      <VerTag effect="plain">Tag 1</VerTag>
      <VerTag effect="plain" type="success">Tag 2</VerTag>
      <VerTag effect="plain" type="info">Tag 3</VerTag>
      <VerTag effect="plain" type="warning">Tag 4</VerTag>
      <VerTag effect="plain" type="danger">Tag 5</VerTag>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { VerTag } from "../../../packages/versakit-ui/index";
</script>

<style lang="scss" scoped>
.VerTag + .VerTag {
  margin-left: 10px;
}
.box {
  display: flex;
  margin: 15px 0;
  .mx-4 {
    margin-left: 1rem;
    margin-right: 1rem;
  }
}
</style>
