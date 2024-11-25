<template>
  <transition name="down" @after-leave="destroy">
    <div :class="VerClass" v-show="isVisable">
      <span class="text">{{ content }}</span>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import type { MessageProps } from './type'

defineOptions({ name: 'VerMessage' })

const isVisable = ref(false)

const props = withDefaults(defineProps<MessageProps>(), {
  type: 'info',
  content: '',
  duration: 0,
  destroy: () => {},
})

const VerClass = computed(() => {
  return ['ver-message', props.type == '' ? '' : `ver-message-${props.type}`]
})

/**
 * 保证动画展示，需要在 mounted 之后进行展示
 */
onMounted(() => {
  isVisable.value = true
  /**
   * 延迟时间关闭
   */
  setTimeout(() => {
    isVisable.value = false
  }, props.duration)
})
</script>

<style src="./index.scss" lang="scss" scoped></style>
