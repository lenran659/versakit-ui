<template>
  <transition name="fade">
    <div
      v-show="props.modelValue"
      :class="['ver-drawer-wrapper', `ver-drawer-${props.direction}`]"
      @click.self="handleClose"
    >
      <div class="ver-drawer">
        <div class="ver-drawer_header">
          <span class="ver-drawer_title">
            {{ props.title ? props.title : '标题' }}
          </span>
          <button class="ver-drawer_headerbtn" @click="handleClose">
            <VerIcon name="x-lg" />
          </button>
        </div>
        <div class="ver-drawer_body">
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import type { DrawerProps } from '../type/type'
import VerIcon from '../../icon/index'
defineOptions({ name: 'VerDrawer' })

const props = withDefaults(defineProps<DrawerProps>(), {
  modelValue: false,
  direction: 'left',
})

const emit = defineEmits(['update:modelValue'])

const handleClose = () => {
  emit('update:modelValue', false)
}
</script>

<style src="../style/index.scss" lang="scss" scoped></style>
