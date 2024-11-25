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
  {
    id: 3,
    title: 'Tag 标签',
    path: '/tag',
  },
  {
    id: 4,
    title: 'Text 文本',
    path: '/text',
  },
  {
    id: 5,
    title: 'Link 链接',
    path: '/link',
  },
  {
    id: 6,
    title: 'Divider 分割线',
    path: '/divider',
  },
  {
    id: 7,
    title: 'Alert 警报',
    path: '/alert',
  },
  {
    id: 8,
    title: 'Avatar 头像',
    path: '/avatar',
  },
  {
    id: 9,
    title: 'Card 卡片',
    path: '/card',
  },
  {
    id: 10,
    title: 'Col 行',
    path: '/col',
  },
  {
    id: 11,
    title: 'Drawer ',
    path: '/drawer',
  },
  {
    id: 12,
    title: 'Form 表单',
    path: '/form',
  },
  {
    id: 13,
    title: 'FormItem',
    path: '/formitem',
  },
  {
    header: 14,
    title: 'Header ',
    path: '/header',
  },
  {
    id: 15,
    title: 'Main',
    path: '/main',
  },
  {
    id: 16,
    title: 'Message',
    path: '/message',
  },
  {
    id: 17,
    title: 'Notification',
    path: '/notification',
  },
  {
    id: 18,
    title: 'Radio',
    path: '/radio',
  },
  {
    id: 19,
    title: 'Row',
    path: '/row',
  },
  {
    id: 20,
    title: 'Switch',
    path: '/switch',
  },
  {
    id: 21,
    title: 'Tabs',
    path: '/tabs',
  },
  {
    id: 22,
    title: 'Textarea',
    path: '/textarea',
  },
])

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
