import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VerBadge from '../src/index.vue'

describe('VerBadge', () => {
  it('测试是否有默认样式', () => {
    const wrapper = mount(VerBadge)
    expect(wrapper.classes()).toContain('ver-badge')
  })
})
