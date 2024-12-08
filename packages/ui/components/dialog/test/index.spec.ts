import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VerDialog from '../src/index.vue'

describe('dialog', () => {
  it('测试是否有默认样式', () => {
    const wrapper = mount(VerDialog)
    expect(wrapper.classes()).toContain('ver-dialog')
  })
})
