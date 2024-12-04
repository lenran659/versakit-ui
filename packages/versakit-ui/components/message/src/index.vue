<template>
  <transition name="down" @after-leave="destroy">
    <div :class="VerClass" v-show="isVisable">
      <template v-if="props.type === 'info'">
        <VerIcon color="gray" name="info" />
        <span class="text">{{ content }}</span>
      </template>
      <template v-else-if="props.type === 'success'">
        <VerIcon color="green" name="passed" />
        <span class="text">{{ content }}</span>
      </template>
      <template v-else-if="props.type === 'warning'">
        <VerIcon color="orange" name="warning" />
        <span class="text">{{ content }}</span>
      </template>
      <template v-if="props.type === 'error'">
        <VerIcon color="red" name="clear" />
        <span class="text">{{ content }}</span>
      </template>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import type { MessageProps } from './type'
import { VerIcon } from '../../../index'

defineOptions({ name: 'VerMessage' })

const isVisable = ref(false)

const props = withDefaults(defineProps<MessageProps>(), {
  type: 'info',
  content: '',
  duration: 0,
  destroy: () => {},
})

const VerClass = computed(() => {
  return ['ver-message']
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
