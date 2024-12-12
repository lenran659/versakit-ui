import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VerMain from '../src/index.vue'

describe('main', () => {
  it('测试是否有默认样式', () => {
    const wrapper = mount(VerMain)
    expect(wrapper.classes()).toContain('ver-main')
  })
})
