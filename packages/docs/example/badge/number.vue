<template>
  <VerBadge type="number" :value="value1">
    <VerButton @click="countUp()">点我增加</VerButton>
  </VerBadge>
</template>

<script setup>
import { VerBadge, VerButton } from '@versakit/ui'
import { ref } from 'vue'

const value1 = ref(95)

const countUp = () => {
  value1.value++
}
</script>
