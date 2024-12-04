<!--
 * @Author: 2171204141@qq.com
 * @Date: 2024-12-02 08:36:57
 * @LastEditors: Dream
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
import { computed, shallowRef, ref, onMounted } from 'vue'
import type { BackTopProps } from './type'
import VerIcon from '../../icon/index'

const props = withDefaults(defineProps<BackTopProps>(), {
  right: '60',
  bottom: '40',
  icon: '',
  iconColor: '#FF0000',
  visibilityHeight: '200',
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
  console.log('click')
  el.value?.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  container.value = document
  el.value = document.documentElement
})
</script>
<style src="./index.scss" lang="scss" scoped></style>
