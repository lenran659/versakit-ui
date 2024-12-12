<script setup lang="ts">
import { VerIcon, VerRow } from 'versakit-ui'
</script>

<template>
  <ver-row>
    <ver-col :span="4">
      <ver-icon name="other-pay" size="25" />
    </ver-col>
    <ver-col :span="4">
      <ver-icon name="new" size="25" />
    </ver-col>
    <ver-col :span="4">
      <ver-icon name="paid" size="25" color="red" />
    </ver-col>
  </ver-row>
</template>

<style scoped lang="scss">
.mb-4 {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.ver-btn + .ver-btn {
  margin: 0px 6px;
}
</style>
