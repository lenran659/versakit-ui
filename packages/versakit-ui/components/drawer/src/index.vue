<template>
  <transition name="fade">
    <div
      class="ver-drawer_wrapper"
      v-show="props.modelValue"
      @click.self="handleClose"
    >
      <div class="ver-drawer">
        <div class="ver-drawer_header">
          <span class="ver-drawer_title">{{ props.title }}</span>
          <button class="ver-drawer_headerbtn" @click="handleClose">X</button>
        </div>
        <div class="ver-drawer_body">
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import type { DrawerProps } from './type'

const props = withDefaults(defineProps<DrawerProps>(), {
  modelValue: false,
})

const emit = defineEmits(['update:modelValue'])

const handleClose = () => {
  emit('update:modelValue', false)
}
</script>

<style src="./index.scss" lang="scss" scoped></style>
