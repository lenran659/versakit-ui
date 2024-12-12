<template>
  <a :class="cls" :href="href">
    <span>
      <slot></slot>
    </span>
  </a>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { LinkProps } from '../type/index'

defineOptions({ name: 'VLink' })

const props = withDefaults(defineProps<LinkProps>(), {
  type: 'info',
  disabled: false,
  href: '',
})

const cls = computed(() => {
  return [
    'v-link',
    props.type ? `link-${props.type}` : '',
    props.disabled == false ? '' : 'is-disabled',
  ]
})
</script>

<style src="../style/index.css" scoped></style>
