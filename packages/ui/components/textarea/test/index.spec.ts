import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VerTextArea from '../src/index.vue'

describe('textarea', () => {
  it('测试是否有默认样式', () => {
    const wrapper = mount(VerTextArea)
    expect(wrapper.classes()).toContain('ver-textarea')
  })
})
