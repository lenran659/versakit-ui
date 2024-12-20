<template>
  <VerBadge>
    <VerButton type="primary">点我没啥</VerButton>
  </VerBadge>
  <VerBadge type="text" value="new">
    <VerButton>点我没事</VerButton>
  </VerBadge>
</template>

<script setup>
import { VerBadge, VerButton } from '@versakit/ui'
</script>

<style scoped lang="scss">
.ver-badge {
  margin-right: 20px;
}
</style>
