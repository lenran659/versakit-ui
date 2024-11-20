<template>
  <transition name="fade">
    <div class="ver-drawer_wrapper" v-show="visible" @click.self="handleClose">
      <div class="ver-drawer">
        <div class="ver-drawer_header">
          <span class="ver-drawer_title">{{ title }}</span>
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
defineProps({
  title: {
    type: String,
    default: '标题',
  },
  visible: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:visible'])

const handleClose = () => {
  emit('update:visible', false)
}
</script>

<style src="./index.scss" lang="scss" scoped></style>
