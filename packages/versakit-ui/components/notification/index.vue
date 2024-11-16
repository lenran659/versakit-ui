<template>
  <transition name="slide-fade" @after-leave="destroy">
    <div class="t-notification" v-show="isVisable">
      <h2 class="t-notification-title">{{ title }}</h2>
      <div class="t-notification-content">
        <span>{{ content }}</span>
      </div>
      <div class="t-notification-closebtn" @click="handClose">X</div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";

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
  /**
   * 展示时长
   */
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
.t-notification {
  position: fixed;
  top: 16px;
  right: 16px;
  width: 330px;
  padding: 14px 26px 14px 13px;
  border-radius: 8px;
  border: 1px solid #ebeef5;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
  background-color: #fff;
  overflow: hidden;
  overflow-wrap: anywhere;
  z-index: 2010;
  &-title {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #303133;
    margin: 0;
    border: none;
    padding: 0;
  }
  &-content {
    margin-top: 6px 0 0;
    font-size: 14px;
    line-height: 24px;
    color: #606266;
    text-align: justify;
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
