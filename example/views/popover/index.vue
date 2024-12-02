<template>
  <div>
    <VerPopOver placement="top-left">
      <template #reference>top-left</template>
      <div>top-left</div>
    </VerPopOver>

    <VerPopOver placement="top-right">
      <template #reference>top-right</template>
      <div>top-right</div>
    </VerPopOver>

    <VerPopOver placement="top-center">
      <template #reference>Top Center</template>
      <div>Top Center</div>
    </VerPopOver>

    <VerPopOver placement="bottom-left">
      <template #reference>bottom-left</template>
      <div>bottom-left</div>
    </VerPopOver>

    <VerPopOver placement="bottom-right">
      <template #reference>bottom-right</template>
      <div>bottom-right</div>
    </VerPopOver>

    <VerPopOver placement="bottom-center">
      <template #reference>bottom Center</template>
      <div>bottom Center</div>
    </VerPopOver>
  </div>
</template>

<script setup lang="ts">
import { VerPopOver } from '../../../packages/versakit-ui/index'
</script>

<style scoped>
.ver-popover {
  margin: 50px;
}
</style>
