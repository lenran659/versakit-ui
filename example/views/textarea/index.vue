<template>
  基础用法
  <VerRow>
    <VerTextarea v-model="textareaVal" placeholder="请输入内容" />
  </VerRow>
  禁用长度
  <VerRow>
    <VerTextarea disabled placeholder="请输入内容" />
  </VerRow>
  限制长度
  <VerRow>
    <VerTextarea v-model="textarea" :maxlength="10" placeholder="请输入内容" />
  </VerRow>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VerTextarea, VerRow } from '@/index.ts'
const textareaVal = ref('')
const textarea = ref('')
</script>

<style scoped>
.ver-textarea {
  width: 300px;
  height: 100px;
}
</style>
