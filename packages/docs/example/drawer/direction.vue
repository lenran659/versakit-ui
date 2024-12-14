<template>
  <div>
    <VerButton @click="drawerLeft = true">Left</VerButton>
    <VerButton @click="drawerTop = true">Top</VerButton>
    <VerButton @click="drawerRight = true">Right</VerButton>
    <VerButton @click="drawerBottom = true">Bottom</VerButton>

    <VerDrawer v-model="drawerLeft">
      <span>左边</span>
    </VerDrawer>

    <VerDrawer direction="top" v-model="drawerTop">
      <span>上面</span>
    </VerDrawer>

    <VerDrawer direction="right" v-model="drawerRight">
      <span>上面</span>
    </VerDrawer>

    <VerDrawer direction="bottom" v-model="drawerBottom">
      <span>上面</span>
    </VerDrawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VerDrawer, VerButton } from '@versakit/ui'

const drawerLeft = ref(false)
const drawerTop = ref(false)
const drawerRight = ref(false)
const drawerBottom = ref(false)
</script>
