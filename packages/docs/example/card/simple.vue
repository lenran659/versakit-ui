<template>
  <div>
    <ver-card>
      <div v-for="o in 4" :key="o" class="text item">
        {{ 'List item ' + o }}
      </div>
    </ver-card>
  </div>
</template>

<script lang="ts" setup>
import { VerCard } from '@versakit/ui'
</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}
</style>
