<script setup lang="ts">
import { VerIcon, VerRow, VerCol } from '@/index'

const list = [
  'passed',
  'pause-circle',
  'pause-circle-o',
  'phone-o',
  'pending-payment',
  'photograph',
  'phone-circle',
  'photo-fail',
  'phone',
  'photo',
  'plus',
  'photo-o',
  'play',
  'play-circle',
  'share',
  'point-gift',
  'points',
]
</script>

<template>
  <ver-row>
    <ver-col :span="4" v-for="(item, index) in list" :key="index">
      <ul>
        <li>
          <ver-icon :name="item" size="30" />
          <span>{{ item }}</span>
        </li>
      </ul>
    </ver-col>
  </ver-row>
</template>

<style lang="scss" scoped>
.ver-col {
  margin: 10px 0px;
}

ul {
  display: flex;
  justify-content: space-around;
  list-style: none;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;

  li {
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &:hover {
      color: skyblue;
    }

    span {
      margin: 0.25rem 0px;
    }
  }
}
</style>
