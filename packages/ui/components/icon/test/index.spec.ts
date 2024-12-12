import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VerIcon from '../src/index.vue'

describe('icon', () => {
  it('测试是否有默认样式', () => {
    const wrapper = mount(VerIcon)
    expect(wrapper.classes()).toContain('ver-icon')
  })
})
