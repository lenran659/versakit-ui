<template>
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
.ver-tag + .ver-tag {
  margin: 0px 10px;
}
</style>
