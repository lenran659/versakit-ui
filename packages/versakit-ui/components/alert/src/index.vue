<template>
  <div :class="VerClass" v-show="isShow">
    <div class="ver-alert_inner">
      <span>{{ title }}</span>
      <span class="ver-alert_closebtn" @click="handClick">X</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { AlertProps } from './type'

const isShow = ref<boolean>(true)

const props = withDefaults(defineProps<AlertProps>(), {
  title: '',
  type: 'info',
})

const VerClass = computed(() => {
  return ['ver-alert', `ver-alert-${props.type}`]
})

const handClick = () => {
  isShow.value = false
}
</script>

<style src="./index.scss" lang="scss" scoped></style>
