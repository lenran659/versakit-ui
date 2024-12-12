import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VCol from '../src/index.vue'

describe('col', () => {
  it('测试是否有默认样式', () => {
    const wrapper = mount(VCol)
    expect(wrapper.classes()).toContain('v-col')
  })
})
