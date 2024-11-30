<script setup lang="ts">
import { VerBadge } from '../../../packages/versakit-ui/index'
</script>

<template>
  <div>
    <!-- 显示消息条数为5的徽章 -->
    <VerBadge :value="5">内容</VerBadge>
    <!-- 显示小红点的徽章 -->
    <VerBadge dot>123</VerBadge>
    <!-- 消息条数超过最大值的徽章 -->
    <VerBadge :value="100" :max="99">123</VerBadge>
    <!-- 使用不同类型的徽章 -->
    <VerBadge :type="'success'" :value="3">123</VerBadge>
  </div>
</template>

<style scoped>
.ver-badge {
  margin: 0px 10px;
}
</style>
