<template>
  <div :class="descriptionKls">
    <!-- 头部 -->
    <div
      v-if="title || extra || $slots.title || $slots.extra"
      class="ver-descriptions-header"
    >
      <div class="ver-descriptions-title">
        <slot name="title">{{ title }}</slot>
      </div>
      <div class="ver-descriptions-extra">
        <slot name="extra">{{ extra }}</slot>
      </div>
    </div>

    <!-- 主要内容 -->
    <div class="ver-descriptions-body">
      <table
        :class="[
          'ver-descriptions-table',
          { 'is-descriptions-bordered': border },
        ]"
      >
        <tbody>
          <template v-for="(row, rowIndex) in getRows()" :key="rowIndex">
            <tr>
              <td
                v-for="(item, itemIndex) in row"
                :key="itemIndex"
                :colspan="item.span || 1"
                :rowspan="item.rowSpan || 1"
                class="ver-descriptions-item"
              >
                <div class="is-descriptions-label">{{ item.label }}</div>
              </td>
            </tr>
            <tr>
              <td
                v-for="(item, itemIndex) in row"
                :key="itemIndex"
                :colspan="item.span || 1"
                :rowspan="item.rowSpan || 1"
                class="ver-descriptions-item"
              >
                <div class="is-descriptions-value">{{ item.value }}</div>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, useSlots, defineProps, withDefaults } from 'vue'
import type { DescriptionsProps, DescriptionItem } from '../type/index'

defineOptions({ name: 'VerDescriptions' })

const slots = useSlots()

const props = withDefaults(defineProps<DescriptionsProps>(), {
  border: false,
  column: 6,
  title: '',
  extra: '',
})

const descriptionKls = computed(() => [
  'ver-descriptions',
  props.border ? 'is-descriptions-border' : '',
])

// 生成行数据
const getRows = () => {
  const children = (slots?.default?.() || []).filter((node) => {
    console.log('Node:', node)
    console.log('node.type:', node.type)
    return (
      (node.type && node.type === 'VerDescriptionsItem') ||
      'ver-descriptions-item'
    )
  })

  const rows: DescriptionItem[][] = []
  let temp: DescriptionItem[] = []
  let totalSpan = 0
  console.log(children)
  children.forEach((node) => {
    console.log(node, node.props, node.props?.span)
    if (node.props) {
      const item: DescriptionItem = {
        label: node.props.label ?? '',
        value: node.props.value || '',
        span: node.props.span || 1,
        rowSpan: node.props.rowSpan || 1,
      }
      totalSpan += item.span ? item.span : 1
      temp.push(item)
    }
    console.log(temp)

    if (temp.length === props.column) {
      rows.push(temp)
      temp = []
      totalSpan = 0
    }
    console.log(rows)
  })

  if (temp.length) {
    const remainingColumns = props.column - totalSpan
    console.log(props.column, totalSpan, remainingColumns)
    if (remainingColumns > 0) {
      const lastItem = temp[temp.length - 1]
      lastItem.span = remainingColumns + 1
    }
    rows.push(temp)
  }

  console.log('rows:', rows)
  return rows
}
</script>

<style scoped lang="scss">
@use '../../../style/color/index.scss' as *;

.ver-descriptions {
  .ver-descriptions-header {
    display: flex;
    justify-content: space-between;
    padding: 16px;

    .ver-descriptions-title {
      font-size: 16px;
      font-weight: bold;
    }

    .ver-descriptions-extra {
      color: $ver-zinc-5;
    }
  }

  .ver-descriptions-body {
    display: flex;
    width: 100%;

    .ver-descriptions-table {
      margin: 0;
      width: 100%;
      border-collapse: collapse;

      .is-descriptions-label,
      .is-descriptions-value {
        word-break: break-all;
      }

      tr:nth-child(2n) {
        background-color: white;
      }

      &.is-descriptions-bordered {
        td {
          border: 1px solid $ver-zinc-3;
        }

        tr {
          border: 1px solid $ver-zinc-3;
        }
      }

      &:not(.is-descriptions-bordered) {
        td {
          border: none;
        }

        tr {
          border: none;
        }
      }
    }
  }
}
</style>
