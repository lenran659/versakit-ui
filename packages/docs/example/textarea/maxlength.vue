<template>
  <VerTextarea v-model="textarea" :maxlength="10" placeholder="请输入内容" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VerTextarea } from '@versakit/ui'
const textarea = ref('')
</script>

<style scoped>
.ver-textarea {
  width: 300px;
  height: 100px;
}
</style>
