import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VerCard from '../src/index.vue'

describe('card', () => {
  it('测试是否有默认样式', () => {
    const wrapper = mount(VerCard)
    expect(wrapper.classes()).toContain('ver-card')
  })
})
