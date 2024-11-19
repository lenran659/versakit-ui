<template>
  <transition name="slide-fade" @after-leave="props.destroy">
    <div class="ver-notification" v-show="isVisable">
      <h2 class="ver-notification-title">{{ title }}</h2>
      <div class="ver-notification-content">
        <span>{{ content }}</span>
      </div>
      <div class="ver-notification-closebtn" @click="handClose">X</div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import type { PropType } from "vue";

// @ts-ignore
import { Hook } from "vue/dist/vue.runtime.global.prod.js";

const isVisable = ref(false);

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  content: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
  },
  destroy: {
    type: Function as PropType<Hook<(el: Element) => void> | (() => void)>,
    default: () => () => {},
  },
});

const handClose = () => {
  isVisable.value = false;
};

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

<style lang="scss" scoped>
@use "../../../style/color/index.scss" as *;

.ver-notification {
  position: fixed;
  top: 16px;
  right: 16px;
  width: 330px;
  padding: 14px 26px 14px 13px;
  border-radius: 8px;
  border: 1px solid $ver-zinc-1;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
  background-color: $ver-zinc-1;
  overflow: hidden;
  overflow-wrap: anywhere;
  z-index: 2010;
  .dark & {
    border: 1px solid $ver-zinc-7;
    background-color: $ver-zinc-8;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
  }

  &-title {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #303133;
    margin: 0;
    border: none;
    padding: 0;

    .dark & {
      color: $ver-zinc-1;
    }
  }
  &-content {
    margin-top: 6px 0 0;
    font-size: 14px;
    line-height: 24px;
    color: #606266;
    text-align: justify;

    .dark & {
      color: $ver-zinc-1;
    }
  }
  &-closebtn {
    position: absolute;
    top: 18px;
    right: 15px;
    cursor: pointer;
    color: #909399;
    font-size: 16px;
  }
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translatex(20px);
}
</style>
