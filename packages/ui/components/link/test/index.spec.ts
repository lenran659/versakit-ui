import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VerText from '../src/index.vue'

describe('link', () => {
  it('测试是否有默认样式', () => {
    const wrapper = mount(VerText)
    expect(wrapper.classes()).toContain('ver-text')
  })
})
