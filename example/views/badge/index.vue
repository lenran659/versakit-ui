<script setup lang="ts">
import {
  VerBadge,
  VerRow,
  VerAvatar,
} from '../../../packages/versakit-ui/index'
</script>

<template>
  <div>
    <!-- 显示消息条数为5的徽章 -->
    <VerBadge :value="5">内容</VerBadge>
    <!-- 显示小红点的徽章 -->
    <ver-row>
      <VerBadge dot>内容</VerBadge>
      <VerBadge type="success" dot>内容</VerBadge>
      <VerBadge type="warning" dot>内容</VerBadge>
    </ver-row>
    <!-- 消息条数超过最大值的徽章 -->
    <VerBadge :value="100" :max="99">123</VerBadge>
    <VerBadge :value="100" :max="10">123</VerBadge>
    <!-- 使用不同类型的徽章 -->
    <VerBadge :type="'success'" :value="3">123</VerBadge>

    <VerBadge :type="'warning'" :value="10">123</VerBadge>

    <VerRow>
      <VerBadge dot>
        <VerAvatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
      </VerBadge>

      <VerBadge type="success" dot>
        <VerAvatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
      </VerBadge>
    </VerRow>
  </div>
</template>

<style scoped>
.ver-row {
  margin: 40px 0px;
}

.ver-badge {
  margin: 0px 10px;
}
</style>
