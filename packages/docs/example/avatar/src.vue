<template>
  <ver-row>
    <ver-col :span="12">
      <div class="demo-basic">
        <div class="sub-title">circle</div>
        <div class="demo-basic--circle">
          <div class="block">
            <ver-avatar src="../../assets/example.jpg" />
          </div>
          <div class="block">
            <ver-avatar>user</ver-avatar>
          </div>
          <div class="block">
            <ver-avatar>
              <VerIcon name="card-image" />
            </ver-avatar>
          </div>
        </div>
      </div>
    </ver-col>
    <ver-col :span="12">
      <div class="demo-basic">
        <div class="sub-title">square</div>
        <div class="demo-basic--square">
          <div class="block">
            <ver-avatar src="../../assets/example.jpg" shape="square" />
          </div>
          <div class="block">
            <ver-avatar shape="square">user</ver-avatar>
          </div>
          <div class="block">
            <ver-avatar shape="square">
              <VerIcon name="card-image" />
            </ver-avatar>
          </div>
        </div>
      </div>
    </ver-col>
  </ver-row>
</template>

<script setup lang="ts">
import { VerAvatar, VerIcon, VerRow, VerCol } from '@versakit/ui'
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
