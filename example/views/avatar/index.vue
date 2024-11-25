<script setup lang="ts">
import { VerAvatar } from '@/index.ts'
</script>

<template>
  <div>
    <h2>基本使用</h2>
    <div class="exam-row">
      <div class="exam-box">
        <div>
          <div class="exam-title">circle</div>
          <div class="exam-row">
            <VerAvatar class="exam-avatar" />
            <VerAvatar class="exam-avatar" size="30" />
            <VerAvatar class="exam-avatar" size="50" />
            <VerAvatar class="exam-avatar" size="70" />
          </div>
        </div>
        <div>
          <div class="exam-title">square</div>
          <div class="exam-row">
            <VerAvatar class="exam-avatar" shape="square" />
            <VerAvatar class="exam-avatar" shape="square" size="30" />
            <VerAvatar class="exam-avatar" shape="square" size="50" />
            <VerAvatar class="exam-avatar" shape="square" size="70" />
          </div>
        </div>
      </div>
    </div>
    <h2>基本使用</h2>
    <div class="exam-row">
      <VerAvatar src="../../assets/example-img.jpg" />
    </div>
  </div>
</template>

<style scoped>
.exam-box {
  display: flex;
}

.exam-avatar {
  margin: 0 8px;
}
.exam-title {
  width: 100%;
  text-align: center;
}
.exam-row {
  display: flex;
  align-items: center;
  margin: 10px 30px;
}
</style>
