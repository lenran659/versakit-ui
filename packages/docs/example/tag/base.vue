<template>
  <div class="my">
    <VerTag>Tag 1</VerTag>
    <VerTag type="success">Tag 2</VerTag>
    <VerTag type="info">Tag 3</VerTag>
    <VerTag type="warning">Tag 4</VerTag>
    <VerTag type="error">Tag 5</VerTag>
  </div>

  <div class="my">
    <VerTag plain>Tag 1</VerTag>
    <VerTag plain type="success">Tag 2</VerTag>
    <VerTag plain type="info">Tag 3</VerTag>
    <VerTag plain type="warning">Tag 4</VerTag>
    <VerTag plain type="error">Tag 5</VerTag>
  </div>

  <div class="my">
    <VerTag round>Tag 1</VerTag>
    <VerTag round type="success">Tag 2</VerTag>
    <VerTag round type="info">Tag 3</VerTag>
    <VerTag round type="warning">Tag 4</VerTag>
    <VerTag round type="error">Tag 5</VerTag>
  </div>
</template>

<script lang="ts" setup>
import { VerTag } from '@versakit/ui'
</script>

<style scoped>
.my {
  margin: 1rem 0;
}

.ver-tag + .ver-tag {
  margin: 0px 10px;
}
</style>
