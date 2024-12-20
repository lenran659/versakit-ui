<template>
  <div class="demo-basic">
    <div class="demo-error">
      <ver-avatar
        src="http://wrong"
        fallback="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
      />
    </div>
    <div class="demo-error">
      <ver-avatar src="http://wrong">
        <template #error>
          <ver-icon name="card-image" />
        </template>
      </ver-avatar>
    </div>
  </div>
</template>

<script setup lang="ts">
import { VerAvatar, VerIcon } from '@versakit/ui'
</script>

<style scoped>
.demo-basic {
  display: flex;
}
.demo-error {
  margin: 5px;
}
</style>
