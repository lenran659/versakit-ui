import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VerCol from '../src/index.vue'

describe('col', () => {
  it('测试是否有默认样式', () => {
    const wrapper = mount(VerCol)
    expect(wrapper.classes()).toContain('ver-col')
  })
})
