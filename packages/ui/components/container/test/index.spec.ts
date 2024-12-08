import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VerContainer from '../src/index.vue'

describe('container', () => {
  it('测试是否有默认样式', () => {
    const wrapper = mount(VerContainer)
    expect(wrapper.classes()).toContain('ver-container')
  })
})
