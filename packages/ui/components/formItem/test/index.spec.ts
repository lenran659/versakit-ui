import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VerFormItem from '../src/index.vue'

describe('form-item', () => {
  it('测试是否有默认样式', () => {
    const wrapper = mount(VerFormItem)
    expect(wrapper.classes()).toContain('ver-form-item')
  })
})
