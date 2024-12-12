<script setup lang="ts">
import { VerTab } from '@versakit/ui'

const customTabList: any = [
  { id: 'tab1', label: 'Tab1', name: 'tab1-content' },
  { id: 'tab2', label: 'Tab2', name: 'tab2-content' },
  { id: 'tab3', label: 'Tab3', name: 'tab3-content' },
]
</script>

<template>
  <ver-tab :tabList="customTabList">
    <template #tab1-content>1</template>
    <template #tab2-content>2</template>
    <template #tab3-content>3</template>
  </ver-tab>
</template>

<style scoped></style>
