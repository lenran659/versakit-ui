<script setup lang="ts">
import { VerIcon, VerRow } from '@versakit/ui'
</script>

<template>
  <ver-row>
    <ver-col :span="4">
      <ver-icon name="columns" size="25" />
    </ver-col>
    <ver-col :span="4">
      <ver-icon name="folder-fill" size="25" color="red" />
    </ver-col>
    <ver-col :span="4">
      <ver-icon name="add-sharp" size="25" />
    </ver-col>
  </ver-row>
</template>

<style scoped lang="scss">
.mb-4 {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.ver-icon {
  margin: 0px 6px;
}
</style>
