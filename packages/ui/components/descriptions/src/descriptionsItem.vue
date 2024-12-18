<!--
 * @Author: 2171204141@qq.com
 * @Date: 2024-12-18 16:52:39
 * @LastEditors: Dream
 * @Description: 
-->
<template>
  <div class="ver-descriptions-item">
    <slot name="label">{{ label }}</slot>
    <slot>{{ value }}</slot>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  label: String,
  value: String,
  span: Number,
  rowSpan: Number,
})
</script>
