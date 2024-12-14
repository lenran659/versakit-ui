<!--
 * @Author: 2171204141@qq.com
 * @Date: 2024-12-02 08:36:57
 * @LastEditors: Jannik 1337741710@qq.com
 * @Description: backtop组件：right,bottom,icon,visibilityHeight属性
-->
<template>
  <div
    v-if="visible"
    :class="Verclass"
    :style="backTopStyle"
    @click.stop="handleClick"
  >
    <ver-icon v-if="icon" :name="icon" :color="iconColor" size="26"></ver-icon>
    <span v-else>
      <slot></slot>
    </span>
  </div>
</template>

<script setup lang="ts">
// TODO: 待书写示例
import { useEventListener, useThrottleFn } from '@vueuse/core'
import { computed, shallowRef, ref, onMounted } from 'vue'
import type { BackTopProps } from '../type/index'
import VerIcon from '../../icon/index'

const props = withDefaults(defineProps<BackTopProps>(), {
  right: '60',
  bottom: '40',
  icon: '',
  iconColor: '',
  visibilityHeight: '150',
})

const iconColor = computed(() => props.iconColor || '#8b5cf6')

export type BacktopProps = typeof props
const Verclass = computed(() => {
  return [
    'ver-backTop',
    props.visibleHeight ? `is-visibleHeight-${props.visibleHeight}` : '',
  ]
})

const backTopStyle = computed(() => ({
  right: `${props.right}px`,
  bottom: `${props.bottom}px`,
}))

const el = shallowRef<HTMLElement | null>(null)
const container = shallowRef<Document | HTMLElement>()
const visible = ref(true)

const handleClick = () => {
  el.value?.scrollTo({ top: 0, behavior: 'smooth' })
}
const handleScroll = () => {
  if (el.value) {
    visible.value = el.value.scrollTop >= parseInt(props.visibilityHeight)
  }
}
const handleScrollThrottled = useThrottleFn(handleScroll, 300, true)

useEventListener(container, 'scroll', handleScrollThrottled)

onMounted(() => {
  container.value = document
  el.value = document.documentElement
  handleScroll()
})
</script>
<style src="../style/index.scss" lang="scss" scoped></style>
