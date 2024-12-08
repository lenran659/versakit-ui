import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VerDivider from '../src/index.vue'

describe('divider', () => {
  it('测试是否有默认样式', () => {
    const wrapper = mount(VerDivider)
    expect(wrapper.classes()).toContain('ver-divider')
  })
})
