import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VerHeader from '../src/index.vue'

describe('col', () => {
  it('测试是否有默认样式', () => {
    const wrapper = mount(VerHeader)
    expect(wrapper.classes()).toContain('ver-header')
  })
})
