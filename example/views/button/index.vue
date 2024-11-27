<script setup lang="ts">
import { VerButton, VerRow } from '@/index'
</script>

<template>
  <div>
    <h2>基本使用</h2>
    <VerRow>
      <VerButton type="primary">primary</VerButton>
      <VerButton type="success">success</VerButton>
      <VerButton type="info">info</VerButton>
      <VerButton type="warning">warning</VerButton>
      <VerButton type="danger">danger</VerButton>
    </VerRow>

    <VerRow>
      <VerButton ghost type="primary">primary</VerButton>
      <VerButton ghost type="success">success</VerButton>
      <VerButton ghost type="info">info</VerButton>
      <VerButton ghost type="warning">warning</VerButton>
      <VerButton ghost type="danger">danger</VerButton>
    </VerRow>

    <VerRow>
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
  <div>
    <h2>禁用按钮</h2>
    <VerRow>
      <VerButton disabled type="primary">primary</VerButton>
      <VerButton disabled type="success">success</VerButton>
      <VerButton disabled type="info">info</VerButton>
      <VerButton disabled type="warning">warning</VerButton>
      <VerButton disabled type="danger">danger</VerButton>
    </VerRow>

    <VerRow>
      <VerButton disabled ghost type="primary">primary</VerButton>
      <VerButton disabled ghost type="success">success</VerButton>
      <VerButton disabled ghost type="info">info</VerButton>
      <VerButton disabled ghost type="warning">warning</VerButton>
      <VerButton disabled ghost type="danger">danger</VerButton>
    </VerRow>

    <VerRow>
      <VerButton disabled plain type="primary">primary</VerButton>
      <VerButton disabled plain type="success">success</VerButton>
      <VerButton disabled plain type="info">info</VerButton>
      <VerButton disabled plain type="warning">warning</VerButton>
      <VerButton disabled plain type="danger">danger</VerButton>
    </VerRow>

    <VerRow>
      <VerButton disabled round type="primary">primary</VerButton>
      <VerButton disabled round type="success">success</VerButton>
      <VerButton disabled round type="info">info</VerButton>
      <VerButton disabled round type="warning">warning</VerButton>
      <VerButton disabled round type="danger">danger</VerButton>
    </VerRow>

    <VerRow>
      <VerButton disabled round ghost type="primary">primary</VerButton>
      <VerButton disabled round ghost type="success">success</VerButton>
      <VerButton disabled round ghost type="info">info</VerButton>
      <VerButton disabled round ghost type="warning">warning</VerButton>
      <VerButton disabled round ghost type="danger">danger</VerButton>
    </VerRow>

    <VerRow>
      <VerButton disabled plain round type="primary">primary</VerButton>
      <VerButton disabled plain round type="success">success</VerButton>
      <VerButton disabled plain round type="info">info</VerButton>
      <VerButton disabled plain round type="warning">warning</VerButton>
      <VerButton disabled plain round type="danger">danger</VerButton>
    </VerRow>
  </div>
  <div>
    <h2>文本按钮</h2>
    <VerRow>
      <VerButton disabled text type="primary">primary</VerButton>
      <VerButton text type="success">success</VerButton>
      <VerButton text type="info">info</VerButton>
      <VerButton text type="warning">warning</VerButton>
      <VerButton text type="danger">danger</VerButton>
    </VerRow>
    <VerRow>
      <VerButton disabled word type="primary">primary</VerButton>
      <VerButton word type="success">success</VerButton>
      <VerButton word type="info">info</VerButton>
      <VerButton word type="warning">warning</VerButton>
      <VerButton word type="danger">danger</VerButton>
    </VerRow>
  </div>
  <div>
    <h2>阴影按钮</h2>
  </div>
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
      <VerButton word size="small" type="danger">small</VerButton>
      <VerButton word size="medium" type="danger">medium</VerButton>
      <VerButton word size="large" type="danger">large</VerButton>
    </VerRow>
  </div>
  <div>
    <h2>图标按钮（在前在后</h2>
  </div>
  <div>
    <h2>加载按钮</h2>
  </div>
  <div>
    <h2>自定义颜色按钮</h2>
  </div>
</template>

<style scoped>
.ver-btn {
  margin: 1rem 1rem;
}
</style>
