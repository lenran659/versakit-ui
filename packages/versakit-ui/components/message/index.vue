<template>
  <transition name="down" @after-leave="destroy">
    <div :class="['ver-message']" :style="style[type]" v-show="isVisable">
      <span class="text">{{ content }}</span>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { onMounted, ref, reactive } from "vue";

const isVisable = ref(false);

const props = defineProps({
  type: {
    type: String,
    default: "info",
  },
  content: {
    type: String,
    required: true,
  },

  duration: {
    type: Number,
  },
  /**
   * 关闭时的回调
   */
  destroy: {
    type: Function,
  },
});

const state = reactive({
  style: {
    info: {
      color: "#909399",
      backgroundColor: "#f4f4f5", //9
      borderColor: "#c8c9cc", // 5
    },
    warning: {
      color: "#e6a23c",
      backgroundColor: "#fdf6ec",
      borderColor: "#f3d19e",
    },
    error: {
      color: "#ec3437",
      backgroundColor: "#fef0f0",
      borderColor: "#fab6b6",
    },
    success: {
      color: "#67c23a",
      backgroundColor: "#f0f9eb",
      borderColor: "#b3e19d",
    },
  },
});

const { style } = state;

/**
 * 保证动画展示，需要在 mounted 之后进行展示
 */
onMounted(() => {
  isVisable.value = true;
  /**
   * 延迟时间关闭
   */
  setTimeout(() => {
    isVisable.value = false;
  }, props.duration);
});
</script>

<style src="./index.scss" lang="scss" scoped></style>
