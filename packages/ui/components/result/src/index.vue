<template>
  <div :class="VerClass">
    <ver-icon :name="computedIconName" size="120" :color="computedColor" />
    <div class="result-content">
      <slot name="content">{{ VerContent }}</slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import VerIcon from '../../icon/index'
import { computed } from 'vue'
import type { ResultProps } from '../type/index.ts'

defineOptions({ name: 'VerResult' })

const props = withDefaults(defineProps<ResultProps>(), {
  status: 'success',
  iconName: '',
})

const VerClass = computed(() => {
  switch (props.status) {
    case 'success':
      return ['ver-result', 'is-result-success']
    case 'warning':
      return ['ver-result', 'is-result-warning']
    case 'error':
      return ['ver-result', 'is-result-error']
    case 'info':
      return ['ver-result', 'is-result-info']
    case '403':
      return ['ver-result', 'is-result-403']
    case '404':
      return ['ver-result', 'is-result-404']
    case '500':
      return ['ver-result', 'is-result-500']
    default:
      return ['ver-result', 'is-result-success']
  }
})
const VerContent = computed(() => {
  switch (props.status) {
    case 'success':
      return '成功'
    case 'warning':
      return '警告'
    case 'error':
      return '错误'
    case 'info':
      return '信息'
    case '403':
      return '403 禁止访问'
    case '404':
      return '404 资源不存在'
    case '500':
      return '500 服务器错误'
    default:
      return ''
  }
})
const computedIconName = computed(() => {
  if (props.iconName) {
    return props.iconName
  }

  switch (props.status) {
    case 'success':
      return 'check-lg'
    case 'warning':
      return 'exclamation-circle-fill'
    case 'error':
      return 'emoji-frown-fill'
    case 'info':
      return 'info-circle-fill'
    case '403':
      return 'ban'
    case '404':
      return 'search'
    case '500':
      return 'server'
    default:
      return 'check-lg'
  }
})

const computedColor = computed(() => {
  switch (props.status) {
    case 'success':
      return '#28a745'
    case 'warning':
      return '#ffc107'
    case 'error':
      return '#dc3545'
    case 'info':
      return '#17a2b8'
    case '403':
      return '#6c757d'
    case '404':
      return '#fd7e14'
    case '500':
      return '#6610f2'
    default:
      return '#28a745'
  }
})
</script>
<style lang="scss" src="../style/index.scss" scoped></style>
