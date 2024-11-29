<script setup lang="ts">
import { VerButton, VerRow } from '@/index'
</script>

<template>
  <!-- 基本使用 -->
  <div>
    <h2>基本使用</h2>
    <VerRow>
      <VerButton>none</VerButton>
      <VerButton type="primary">primary</VerButton>
      <VerButton type="success">success</VerButton>
      <VerButton type="info">info</VerButton>
      <VerButton type="warning">warning</VerButton>
      <VerButton type="danger">danger</VerButton>
    </VerRow>

    <VerRow>
      <VerButton ghost>none</VerButton>
      <VerButton ghost type="primary">primary</VerButton>
      <VerButton ghost type="success">success</VerButton>
      <VerButton ghost type="info">info</VerButton>
      <VerButton ghost type="warning">warning</VerButton>
      <VerButton ghost type="danger">danger</VerButton>
    </VerRow>

    <VerRow>
      <VerButton plain>none</VerButton>
      <VerButton plain type="primary">primary</VerButton>
      <VerButton plain type="success">success</VerButton>
      <VerButton plain type="info">info</VerButton>
      <VerButton plain type="warning">warning</VerButton>
      <VerButton plain type="danger">danger</VerButton>
    </VerRow>

    <VerRow>
      <VerButton round type="primary">primary</VerButton>
      <VerButton round type="success">success</VerButton>
      <VerButton round type="info">info</VerButton>
      <VerButton round type="warning">warning</VerButton>
      <VerButton round type="danger">danger</VerButton>
    </VerRow>

    <VerRow>
      <VerButton round ghost type="primary">primary</VerButton>
      <VerButton round ghost type="success">success</VerButton>
      <VerButton round ghost type="info">info</VerButton>
      <VerButton round ghost type="warning">warning</VerButton>
      <VerButton round ghost type="danger">danger</VerButton>
    </VerRow>

    <VerRow>
      <VerButton plain round type="primary">primary</VerButton>
      <VerButton plain round type="success">success</VerButton>
      <VerButton plain round type="info">info</VerButton>
      <VerButton plain round type="warning">warning</VerButton>
      <VerButton plain round type="danger">danger</VerButton>
    </VerRow>
  </div>
  <!-- 禁用 -->
  <div>
    <h2>禁用按钮</h2>
    <VerRow>
      <VerButton disabled>none</VerButton>
      <VerButton disabled type="primary">primary</VerButton>
      <VerButton disabled type="success">success</VerButton>
      <VerButton disabled type="info">info</VerButton>
      <VerButton disabled type="warning">warning</VerButton>
      <VerButton disabled type="danger">danger</VerButton>
    </VerRow>

    <VerRow>
      <VerButton disabled plain>none</VerButton>
      <VerButton disabled plain type="primary">primary</VerButton>
      <VerButton disabled plain type="success">success</VerButton>
      <VerButton disabled plain type="info">info</VerButton>
      <VerButton disabled plain type="warning">warning</VerButton>
      <VerButton disabled plain type="danger">danger</VerButton>
    </VerRow>

    <VerRow>
      <VerButton disabled plain text>none</VerButton>
      <VerButton disabled plain text type="primary">primary</VerButton>
      <VerButton disabled plain text type="success">success</VerButton>
      <VerButton disabled plain text type="info">info</VerButton>
      <VerButton disabled plain text type="warning">warning</VerButton>
      <VerButton disabled plain text type="danger">danger</VerButton>
    </VerRow>
  </div>
  <!-- 文本 -->
  <div>
    <h2>文本按钮</h2>
    <VerRow>
      <VerButton text>none</VerButton>
      <VerButton text type="primary">primary</VerButton>
      <VerButton text type="success">success</VerButton>
      <VerButton text type="info">info</VerButton>
      <VerButton text type="warning">warning</VerButton>
      <VerButton text type="danger">danger</VerButton>
    </VerRow>
    <VerRow>
      <VerButton disabled text>none</VerButton>
      <VerButton disabled text type="primary">primary</VerButton>
      <VerButton disabled text type="success">success</VerButton>
      <VerButton disabled text type="info">info</VerButton>
      <VerButton disabled text type="warning">warning</VerButton>
      <VerButton disabled text type="danger">danger</VerButton>
    </VerRow>
  </div>
  <!-- 阴影 -->
  <div>
    <h2>阴影按钮</h2>
    <VerRow>
      <VerButton shade>none</VerButton>
      <VerButton shade type="primary">primary</VerButton>
      <VerButton shade type="success">success</VerButton>
      <VerButton shade type="info">info</VerButton>
      <VerButton shade type="warning">warning</VerButton>
      <VerButton shade type="danger">danger</VerButton>
    </VerRow>

    <VerRow>
      <VerButton disabled shade>none</VerButton>
      <VerButton disabled shade type="primary">primary</VerButton>
      <VerButton disabled shade type="success">success</VerButton>
      <VerButton disabled shade type="info">info</VerButton>
      <VerButton disabled shade type="warning">warning</VerButton>
      <VerButton disabled shade type="danger">danger</VerButton>
    </VerRow>
  </div>
  <!-- 尺寸 -->
  <div>
    <h2>按钮尺寸</h2>
    <VerRow>
      <VerButton size="small" type="primary">small</VerButton>
      <VerButton size="medium" type="primary">medium</VerButton>
      <VerButton size="large" type="primary">large</VerButton>
      <VerButton round size="small" plain type="success">small</VerButton>
      <VerButton round size="medium" plain type="success">medium</VerButton>
      <VerButton round size="large" plain type="success">large</VerButton>
    </VerRow>
    <VerRow>
      <VerButton round size="small" type="warning">small</VerButton>
      <VerButton round size="medium" type="warning">medium</VerButton>
      <VerButton round size="large" type="warning">large</VerButton>
      <VerButton text size="small" type="danger">small</VerButton>
      <VerButton text size="medium" type="danger">medium</VerButton>
      <VerButton text size="large" type="danger">large</VerButton>
    </VerRow>
  </div>
  <!-- 图标 -->
  <div>
    <h2>图标按钮（在前在后）</h2>
  </div>
  <!-- 加载 -->
  <div>
    <h2>加载按钮</h2>
  </div>
  <!-- 自定义颜色 -->
  <div>
    <h2>自定义颜色按钮</h2>
    <VerRow>
      <VerButton color="'#626aef'" text>none</VerButton>
      <VerButton color="'#626aef'" text>primary</VerButton>
      <VerButton color="'#626aef'" text>success</VerButton>
      <VerButton color="'#626aef'" text>info</VerButton>
      <VerButton color="'#626aef'" text>warning</VerButton>
      <VerButton color="'#626aef'" text>danger</VerButton>
    </VerRow>
  </div>
</template>

<style scoped>
.ver-btn {
  margin: 0.75rem 0.5rem;
}
</style>
