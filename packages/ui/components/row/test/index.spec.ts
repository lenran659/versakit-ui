import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VerRow from '../src/index.vue'

describe('form-item', () => {
  it('测试是否有默认样式', () => {
    const wrapper = mount(VerRow)

    expect(wrapper.classes()).toContain('ver-row')
  })
})
