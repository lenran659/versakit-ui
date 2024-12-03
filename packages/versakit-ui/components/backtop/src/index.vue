<template>
  <div
    v-if="visible"
    :class="Verclass"
    :style="backTopStyle"
    @click.stop="handleClick"
  >
    <ver-icon v-if="icon" :name="icon"></ver-icon>
    <span v-else>
      <slot></slot>
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed, shallowRef, ref, onMounted } from 'vue'
import { BackTopProps } from './type'
import VerIcon from '../../icon/index'

const props = withDefaults(defineProps<BackTopProps>(), {
  right: '60',
  bottom: '40',
  target: 'smooth',
  icon: '',
  visibilityHeight: '200',
})

export type BacktopProps = typeof props
const Verclass = computed(() => {
  return [
    'ver-backTop',
    props.visibleHeight ? `is-visibleHeight-${props.visibleHeight}` : '',
    props.target ? `is-target-${props.target}` : '',
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
