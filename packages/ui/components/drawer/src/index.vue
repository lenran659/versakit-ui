<!--
 * @Author: 2171204141@qq.com
 * @Date: 2024-11-26 09:12:14
 * @LastEditors: Jannik 1337741710@qq.com
 * @Description: drawer组件
-->
<template>
  <transition name="fade">
    <div
      v-show="props.modelValue"
      :class="['ver-drawer_wrapper', `ver-drawer-${props.direction}`]"
      @click.self="handleClose"
    >
      <div class="ver-drawer">
        <div class="ver-drawer_header">
          <span class="ver-drawer_title">
            {{ props.title ? props.title : '标题' }}
          </span>
          <button class="ver-drawer_headerbtn" @click="handleClose">
            <VerIcon name="cross" />
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
import type { DrawerProps } from './type'
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

<style src="./index.scss" lang="scss" scoped></style>
