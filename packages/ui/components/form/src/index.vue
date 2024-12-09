<template>
  <div class="ver-form">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide, ref } from 'vue'
import type { FormProps } from '../type/index'

defineOptions({ name: 'VerForm' })

const form = ref(null)
provide('form', form)

withDefaults(defineProps<FormProps>(), {
  module: {},
  labelWidth: '80px',
})
</script>
