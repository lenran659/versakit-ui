import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { VerLink } from '../../versakit-ui/index'

describe('VerLink', () => {
  // 组件应能正确挂载并渲染
  it('组件应能正确挂载并渲染', () => {
    const wrapper = mount(VerLink)
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('.ver-link').exists()).toBe(true)
  })
})
