<template>
  <div class="my">
    <VerTag>Tag 1</VerTag>
    <VerTag type="success">Tag 2</VerTag>
    <VerTag type="info">Tag 3</VerTag>
    <VerTag type="warning">Tag 4</VerTag>
    <VerTag type="danger">Tag 5</VerTag>
  </div>

  <div class="my">
    <VerTag effect="plain">Tag 1</VerTag>
    <VerTag effect="plain" type="success">Tag 2</VerTag>
    <VerTag effect="plain" type="info">Tag 3</VerTag>
    <VerTag effect="plain" type="warning">Tag 4</VerTag>
    <VerTag effect="plain" type="danger">Tag 5</VerTag>
  </div>

  <div class="my">
    <VerTag effect="plain" round>Tag 1</VerTag>
    <VerTag effect="plain" round type="success">Tag 2</VerTag>
    <VerTag effect="plain" round type="info">Tag 3</VerTag>
    <VerTag effect="plain" round type="warning">Tag 4</VerTag>
    <VerTag effect="plain" round type="danger">Tag 5</VerTag>
  </div>
</template>

<script lang="ts" setup>
import { VerTag } from "../../../packages/versakit-ui/index";
</script>

<style scoped>
.my {
  margin: 1rem 0;
}

.ver-tag + .ver-tag {
  margin: 0px 10px;
}
</style>
