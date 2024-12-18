<template>
  <div class="ver-badge">
    <slot></slot>
    <!-- 通过上标文本标签实现徽标 -->
    <sup ref="verBadge" :class="badgeClass"></sup>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
// import type { BadgeProps } from '../type/index.ts'
defineOptions({
  name: 'VerBadge',
})

// const props = defineProps<BadgeProps>({
//   type: 'dot',
//   position: 'topRight',
// })

const badgeClass = computed(() => {
  return ['ver-badge-dot']
})
</script>

<style src="../style/index.scss" lang="scss" scoped></style>
