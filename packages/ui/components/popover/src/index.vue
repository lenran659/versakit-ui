<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'
import { getElementSize } from '../../../utils/getElementSize.js'
import type { PopOverProps } from '../type/index'

defineOptions({ name: 'VerPopOver' })

// 延迟关闭时长
const DELAY_TIME = 100

const props = withDefaults(defineProps<PopOverProps>(), {
  placement: 'top-left',
})

const isVisable = ref(false)

// 控制延迟关闭
let timeout: number | null | any = null

/**
 * 鼠标移入的触发行为
 */
const onMouseenter = () => {
  isVisable.value = true
  // 再次触发时，清理延时装置
  if (timeout) {
    clearTimeout(timeout)
  }
}
/**
 * 鼠标移出的触发行为
 */
const onMouseleave = () => {
  // 延时装置
  timeout = setTimeout(() => {
    isVisable.value = false
    timeout = null
  }, DELAY_TIME)
}

/**
 * 计算元素尺寸
 */
const referenceTarget = ref(null)
const contentTarget = ref(null)

/**
 * 计算弹层位置
 */
const contentStyle: any = ref({
  top: 0,
  left: 0,
})

/**
 * 监听展示的变化，在展示时计算气泡位置
 */
watch(isVisable, (val) => {
  if (!val) {
    return
  }
  // 等待渲染成功之后
  nextTick(() => {
    switch (props.placement) {
      // 左上
      case 'top-left':
        contentStyle.value.top = 0
        contentStyle.value.left =
          -getElementSize(contentTarget.value).width + 'px'
        break
      // 右上
      case 'top-right':
        contentStyle.value.top = 0
        contentStyle.value.left =
          getElementSize(referenceTarget.value).width / 15 + 'px'
        break
      // 左下
      case 'bottom-left':
        contentStyle.value.top =
          getElementSize(referenceTarget.value).height + 'px'
        contentStyle.value.left =
          -getElementSize(contentTarget.value).width + 'px'
        break
      // 右下
      case 'bottom-right':
        contentStyle.value.top =
          getElementSize(referenceTarget.value).height + 'px'
        contentStyle.value.left =
          getElementSize(referenceTarget.value).width / 15 + 'px'
        break
      // 底部中间
      case 'bottom-center':
        contentStyle.value.top =
          getElementSize(referenceTarget.value).height + 'px'
        contentStyle.value.left =
          getElementSize(referenceTarget.value).width / 32 -
          getElementSize(contentTarget.value).width / 2 +
          'px'
        break

      // 上层中间
      case 'top-center':
        contentStyle.value.top =
          -getElementSize(contentTarget.value).height + 'px'
        contentStyle.value.left =
          getElementSize(referenceTarget.value).width / 32 -
          getElementSize(contentTarget.value).width / 2 +
          'px'
        break
    }
  })
})
</script>

<template>
  <div
    class="ver-popover"
    @mouseleave="onMouseleave"
    @mouseenter="onMouseenter"
  >
    <!-- 具名插槽 -->
    <div ref="referenceTarget">
      <!-- 具名插槽 -->
      <slot name="reference" />
    </div>
    <!-- 气泡展示动画 -->
    <transition name="slide">
      <div
        v-show="isVisable"
        ref="contentTarget"
        class="ver-popover-item"
        :style="contentStyle"
      >
        <!-- 匿名插槽 -->
        <div class="content">
          <slot />
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped src="../style/index.scss"></style>
