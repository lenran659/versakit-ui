<template>
  <a :class="VerClass" :href="href">
    <span>
      <slot></slot>
    </span>
  </a>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { LinkProps } from '../type/index'

defineOptions({ name: 'VerLink' })

const props = withDefaults(defineProps<LinkProps>(), {
  type: '',
  disabled: false,
  href: '',
})

const VerClass = computed(() => {
  return [
    'ver-link',
    props.type == '' ? '' : `ver-link-${props.type}`,
    props.disabled == false ? '' : 'is-disabled',
  ]
})
</script>

<style src="../style/index.scss" lang="scss" scoped></style>
