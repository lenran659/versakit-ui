<!--
 * @Author: 2171204141@qq.com
 * @Date: 2024-12-03 21:51:01
 * @LastEditors: Dream
 * @Description: backtop
-->
<template>
  <div class="red-box"></div>
  <div class="yellow-box"></div>
  <ver-row>
    <ver-backtop right="140">UP</ver-backtop>
    <ver-backtop icon="arrow-up" iconColor="#482FBD"></ver-backtop>
  </ver-row>
</template>
<script lang="ts" setup>
import { VerBacktop, VerRow } from '@/index.ts'
</script>
<style scoped>
.red-box {
  height: 500px;
  background-color: red;
}

.yellow-box {
  height: 500px;
  background-color: yellow;
}
</style>
