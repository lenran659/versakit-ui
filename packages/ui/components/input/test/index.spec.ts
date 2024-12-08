import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VerInput from '../src/index.vue'

describe('col', () => {
  it('测试是否有默认样式', () => {
    const wrapper = mount(VerInput)
    expect(wrapper.classes()).toContain('ver-input')
  })
})
