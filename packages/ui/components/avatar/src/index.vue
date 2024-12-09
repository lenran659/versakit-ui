<template>
  <span
    :class="VerClass"
    :style="{
      width: size,
      height: size,
    }"
  >
    <img :src="src" />
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

const size = props.size + 'px'

const VerClass = computed(() => {
  return ['ver-avatar', props.shape == 'circle' ? 'is-circle' : 'is-square']
})
</script>

<style lang="scss" src="../style/index.scss" scoped></style>
