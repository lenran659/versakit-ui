<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const list = ref()

const topath = (path: string) => {
  router.push(path)
}

const toggleDark = () => {
  document.body.classList.toggle('dark')

  const isDark = document.body.classList.contains('dark')

  localStorage.setItem('isDark', isDark ? 'true' : 'false')

  const isDarkMode = localStorage.getItem('isDark')

  if (isDarkMode === 'true') {
    document.body.classList.add('dark')
  } else {
    document.body.classList.remove('dark')
  }
}

const getPartFromPathBySplit = (path) => {
  const parts = path.split('/')
  const filteredParts = parts.filter((part) => part !== '')
  if (filteredParts.length > 0) {
    return filteredParts[0]
  }
  return null
}

onMounted(() => {
  list.value = route.matched[0].children

  console.log(list.value)
})
</script>

<template>
  <div>
    <header>
      <div class="header-left">组件</div>
      <div class="header-right">
        <button @click="toggleDark">切换主题</button>
      </div>
    </header>

    <div class="layout-container">
      <div class="left-section">
        <ul>
          <li v-for="item in list" :key="item.id" @click="topath(item.path)">
            <span>{{ getPartFromPathBySplit(item.path) }}</span>
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
  </div>
</template>

<style scoped>
header {
  display: flex;
  width: 100%;
  height: 64px;
  border-bottom: 1px solid #c4c4c4;
}

.header-left {
  text-align: center;
  line-height: 64px;
  width: 25.5%;
  border-right: 1px solid #c4c4c4;
}

.header-right {
  width: 75%;
  line-height: 64px;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  padding: 0.5rem;
  margin-bottom: 10px;
  border-bottom: 1px solid #c4c4c4;
  cursor: pointer;
}

.layout-container {
  display: flex;
  height: 98vh;
}
.left-section {
  width: 25%;
  padding: 10px;
  border-right: 1px solid #c4c4c4;
}

.right-section {
  width: 75%;
  padding: 1rem;
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
