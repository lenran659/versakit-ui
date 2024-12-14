<template>
  <ver-row>
    <ver-col :span="12">
      <div class="demo-basic">
        <div class="sub-title">circle</div>
        <div class="demo-basic--circle">
          <div class="block">
            <ver-avatar
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
            />
          </div>
          <div class="block">
            <ver-avatar
              :size="24"
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
            />
          </div>
        </div>
      </div>
    </ver-col>
    <ver-col :span="12">
      <div class="demo-basic">
        <div class="sub-title">square</div>
        <div class="demo-basic--square">
          <div class="block">
            <ver-avatar
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
              shape="square"
            />
          </div>
          <div class="block">
            <ver-avatar
              :size="24"
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
              shape="square"
            />
          </div>
        </div>
      </div>
    </ver-col>
  </ver-row>
</template>

<script lang="ts" setup>
import { VerAvatar, VerRow, VerCol } from '@versakit/ui'
</script>

<style scoped>
.demo-basic {
  text-align: center;
}
.demo-basic .sub-title {
  margin-bottom: 10px;
  font-size: 14px;
  color: #909399;
}
.demo-basic .demo-basic--circle,
.demo-basic .demo-basic--square {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.demo-basic .block:not(:last-child) {
  border-right: 1px solid #dcdfe6;
}
.demo-basic .block {
  flex: 1;
}
.demo-basic .el-col:not(:last-child) {
  border-right: 1px solid #dcdfe6;
}
</style>
