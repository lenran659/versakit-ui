import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VerSwitch from '../src/index.vue'

describe('main', () => {
  it('测试是否有默认样式', () => {
    const wrapper = mount(VerSwitch)
    expect(wrapper.classes()).toContain('ver-switch')
  })
})
