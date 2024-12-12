import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VerForm from '../src/index.vue'

describe('form', () => {
  it('测试是否有默认样式', () => {
    const wrapper = mount(VerForm)
    expect(wrapper.classes()).toContain('ver-form')
  })
})
