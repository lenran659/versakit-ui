<template>
  <div>
    <ver-button @click="dialogVisible = true">点击打开对话框</ver-button>

    <ver-dialog v-model:visible="dialogVisible">
      <span>这是一段信息</span>
      <template #footer>
        <ver-button>取消</ver-button>
        <ver-button type="primary" @click="dialogVisible = false">确定</ver-button>
      </template>
    </ver-dialog>
  </div>
</template>

<script lang="ts" setup>
import { VerButton, VerDialog } from "../../../packages/versakit-ui/index";

import { ref } from "vue";

const dialogVisible = ref(false);
</script>

<style lang="scss" scoped>
.t-dialog_footer .t-btn {
  margin-right: 20px;
}
</style>
