import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VerBacktop from '../src/index.vue'

describe('BackTop', () => {
  it('测试是否有默认样式', () => {
    const wrapper = mount(VerBacktop)
    expect(wrapper.classes()).toContain('ver-backTop')
  })
})
