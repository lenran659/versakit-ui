import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VerAvatar from '../src/index.vue'

describe('Avatar', () => {
  it('测试是否有默认样式', () => {
    const wrapper = mount(VerAvatar)
    expect(wrapper.classes()).toContain('ver-avatar')
  })
})
