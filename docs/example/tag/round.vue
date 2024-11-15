<template>
  <div>
    <VerTag round>Tag 1</VerTag>
    <VerTag round type="success">Tag 2</VerTag>
    <VerTag round type="info">Tag 3</VerTag>
    <VerTag round type="warning">Tag 4</VerTag>
    <VerTag round type="danger">Tag 5</VerTag>
  </div>
  <div class="my-4">
    <VerTag effect="dark" round>Tag 1</VerTag>
    <VerTag effect="dark" round type="success">Tag 2</VerTag>
    <VerTag effect="dark" round type="info">Tag 3</VerTag>
    <VerTag effect="dark" round type="warning">Tag 4</VerTag>
    <VerTag effect="dark" round type="danger">Tag 5</VerTag>
  </div>
  <div class="my-4">
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
