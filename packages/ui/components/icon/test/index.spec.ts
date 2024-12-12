import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VIcon from '../src/index.vue'

describe('icon', () => {
  it('测试是否有默认样式', () => {
    const wrapper = mount(VIcon)
    expect(wrapper.classes()).toContain('v-icon')
  })
})
