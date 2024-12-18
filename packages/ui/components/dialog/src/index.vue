<!--
 * @Author: 2171204141@qq.com
 * @Date: 2024-12-17 19:10:47
 * @LastEditors: Dream
 * @Description: 
-->
<template>
  <transition name="fade">
    <div
      class="ver-dialog_wrapper"
      v-show="props.modelValue"
      @click.self="close"
    >
      <div
        class="ver-dialog"
        :style="{ width: props.width, marginTop: props.top }"
      >
        <div class="ver-dialog_header">
          <slot name="title">
            <span class="ver-dialog_title">
              {{ props.title }}
            </span>
          </slot>
          <button class="ver-dialog_headerbtn" @click="close">
            <VerIcon name="x-lg" />
          </button>
        </div>
        <div class="ver-dialog_body">
          <slot></slot>
        </div>
        <div class="ver-dialog_footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import type { DiaLogProps } from '../type/index'
import VerIcon from '../../icon/index'

defineOptions({ name: 'VerDialog' })

const props = withDefaults(defineProps<DiaLogProps>(), {
  title: '标题',
  modelValue: false,
  width: '30%',
  top: '15vh',
})

const emit = defineEmits(['update:modelValue'])

const close = () => {
  emit('update:modelValue', false)
}
</script>

<style src="../style/index.scss" lang="scss" scoped></style>
