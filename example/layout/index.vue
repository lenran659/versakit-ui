<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const list = ref([
  {
    id: 1,
    title: 'Button 按钮',
    path: '/',
  },
  {
    id: 2,
    title: 'Input 输入框',
    path: '/input',
  },
])

const topath = (path: string) => {
  router.push(path)
}
</script>

<template>
  <div class="layout-container">
    <div class="left-section">
      <ul>
        <li v-for="item in list" :key="item.id" @click="topath(item.path)">
          <span>{{ item.title }}</span>
        </li>
      </ul>
    </div>
    <div class="right-section">
      <router-view v-slot="{ Component }">
        <transition appear name="fade-transform" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  padding: 1rem;
  border: 1px solid #c4c4c4;
  margin-bottom: 10px;
  cursor: pointer;
}

.layout-container {
  display: flex;
  height: 98vh;
}
.left-section {
  width: 25%;
  padding: 10px;
}
.right-section {
  width: 75%;
  padding: 10px;
}

.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.5s;
}

.fade-transform-enter-from {
  opacity: 0;
}

.fade-transform-leave-to {
  opacity: 0;
}
</style>
