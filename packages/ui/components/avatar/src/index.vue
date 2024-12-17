<template>
  <span
    :class="VerClass"
    :style="{
      width: size,
      height: size,
    }"
  >
    <img
      :class="imgClass"
      v-if="props.src"
      :src="src"
      alt=""
      @error="props.error || imageErrorHandler"
    />
    <span v-else>
      <slot></slot>
    </span>
  </span>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { Fit } from '../type/index'
import type { AvatarProps } from '../type/index'

defineOptions({ name: 'VerAvatar' })

const props = withDefaults(defineProps<AvatarProps>(), {
  src: '',
  size: 50,
  shape: 'circle',
  fit: 'cover' as Fit.cover,
  callback: '',
})

const imageErrorHandler = (event: Event) => {
  const imgTarget = event.target as HTMLImageElement
  return (imgTarget.src =
    props.callback ||
    'https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png')
}

const size = computed(() => {
  if (typeof props.size === 'number') {
    return props.size + 'px'
  }
  if (typeof props.size === 'string') {
    switch (props.size) {
      case 'xs':
        return '25px'
      case 'sm':
        return '32px'
      case 'lg':
        return '42px'
      default:
        return '50px'
    }
  } else return 50
})

const VerClass = computed(() => {
  const classes = [
    'ver-avatar',
    props.shape == 'circle' ? 'is-circle' : 'is-square',
  ]
  return classes
})

const imgClass = computed(() => {
  return [`fit-${props.fit}`]
})
</script>

<style lang="scss" src="../style/index.scss" scoped></style>
