import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VerRadio from '../src/index.vue'

describe('main', () => {
  it('测试是否有默认样式', () => {
    const wrapper = mount(VerRadio)
    expect(wrapper.classes()).toContain('ver-radio')
  })
})
