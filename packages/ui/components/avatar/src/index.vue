<template>
  <span
    :class="VerClass"
    :style="{
      width: size,
      height: size,
    }"
  >
    <img v-if="props.src" :src="src" @error="imageErrorHandler" />
    <span v-else>
      <slot></slot>
    </span>
  </span>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { AvatarProps } from '../type/index'

defineOptions({ name: 'VerAvatar' })

const props = withDefaults(defineProps<AvatarProps>(), {
  src: '',
  size: 50,
  shape: 'circle',
})

const imageErrorHandler = (event: Event) => {
  const imgTarget = event.target as HTMLImageElement
  imgTarget.src =
    'https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png'
}

const size = props.size + 'px'

const VerClass = computed(() => {
  return ['ver-avatar', props.shape == 'circle' ? 'is-circle' : 'is-square']
})
</script>

<style lang="scss" src="../style/index.scss" scoped></style>
