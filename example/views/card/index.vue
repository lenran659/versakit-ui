<script setup lang="ts">
import { VerCard, VerRow } from '@/index.ts'
</script>

<template>
  <div>
    <h2>基本使用</h2>
    <VerRow>
      <div class="gap">
        <VerCard shadow="never">
          <template #header>title</template>
          <p v-for="o in 4" :key="o" class="text item">
            {{ 'List item ' + o }}
          </p>
        </VerCard>
      </div>
      <div class="gap">
        <VerCard shadow="always">
          <template #header>title</template>
          <p v-for="o in 4" :key="o" class="text item">
            {{ 'List item ' + o }}
          </p>
        </VerCard>
      </div>
      <div class="gap">
        <VerCard shadow="hover">
          <template #header>title</template>
          <p v-for="o in 4" :key="o" class="text item">
            {{ 'List item ' + o }}
          </p>
        </VerCard>
      </div>
    </VerRow>
  </div>
</template>

<style scoped>
.gap {
  margin: 16px 0;
}
</style>
