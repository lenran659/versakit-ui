<template>
  <div class="demo">
    <div v-for="fit in fits" :key="fit" class="block">
      <div class="title">{{ fit }}</div>
      <ver-avatar shape="square" :size="100" :fit="fit" :src="url" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, toRefs } from 'vue'
import { VerAvatar } from '@versakit/ui'

const state = reactive({
  fits: ['fill', 'contain', 'cover', 'none'],
  url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
})
const { fits, url } = toRefs(state)
</script>

<style scoped>
.demo {
  display: flex;
  justify-content: center;
  align-items: center;
}
.title {
  width: 100%;
  text-align: center;
}
.block {
  margin-left: 15px;
  margin-right: 15px;
}
</style>
