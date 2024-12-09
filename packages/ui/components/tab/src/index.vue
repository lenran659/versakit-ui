<template>
  <div class="ver-tab">
    <div class="tab-header">
      <div
        v-for="(item, index) in props.tabList"
        :key="item.id"
        :class="['tab-item', { 'active-tab': currentTabIndex === index }]"
        @click="switchTab(index)"
      >
        <span class="tab-label">{{ item.label }}</span>
      </div>
    </div>
    <div
      class="tab-content"
      :key="`tab-content-${props.tabList[currentTabIndex].name}`"
    >
      <slot :name="props.tabList[currentTabIndex].name" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { TabProps } from '../type/type.js'

defineOptions({ name: 'VerTab' })

// 通过props接收tab列表
const props = withDefaults(defineProps<TabProps>(), {
  tabList: () => [],
})

// 当前激活的tab索引
const currentTabIndex = ref(0)

// 切换tab的方法
const switchTab = (index: number) => {
  currentTabIndex.value = index
}
</script>

<style lang="scss" src="../style/index.scss" scoped></style>
