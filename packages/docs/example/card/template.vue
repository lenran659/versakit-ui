<template>
  <div>
    <ver-card>
      <template #header>
        <div>
          <span>头部</span>
        </div>
      </template>
      <div>
        <span>内容</span>
      </div>
      <template #footer>
        <div>
          <span>底部</span>
        </div>
      </template>
    </ver-card>
  </div>
</template>

<script lang="ts" setup>
import { VerCard } from '@versakit/ui'
</script>
