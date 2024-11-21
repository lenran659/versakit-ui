<template>
  <span :class="tClass">
    <img :src="src" />
  </span>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { AvatarProps } from './type'

const props = withDefaults(defineProps<AvatarProps>(), {
  src: '',
  size: 32,
  shape: 'circle',
})

const size = props.size + 'px'

const tClass = computed(() => {
  return ['ver-avatar', props.shape == 'circle' ? 'is-circle' : 'is-square']
})
</script>

<style lang="scss" scoped>
.ver-avatar {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  text-align: center;
  overflow: hidden;
  color: #fff;
  width: v-bind(size);
  height: v-bind(size);
  font-size: 14px;
  background-color: #c0c4cc;
  & > img {
    object-fit: cover;
    display: block;
    height: 100%;
    max-width: 100%;
    border-style: none;
  }
}

.ver-avatar.is-circle {
  border-radius: 50%;
}

.ver-avatar.is-square {
  border-radius: 4px;
}
</style>
