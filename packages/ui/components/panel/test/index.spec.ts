import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VerPlane from '../src/index.vue'

describe('VerPlane', () => {
  it('测试是否有默认样式', () => {
    const wrapper = mount(VerPlane)

    expect(wrapper.classes()).toContain('ver-panel')
  })
})
