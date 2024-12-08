import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VerTag from '../src/index.vue'

describe('tag', () => {
  it('测试是否有默认样式', () => {
    const wrapper = mount(VerTag)
    expect(wrapper.classes()).toContain('ver-tag')
  })
})
