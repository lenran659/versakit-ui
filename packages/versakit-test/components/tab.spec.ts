import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { VerTab } from '../../versakit-ui/index'

describe('VerTab', () => {
  // 组件应能正确挂载并渲染
  it('组件应能正确挂载并渲染', () => {
    const wrapper = mount(VerTab)
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('.ver-tab').exists()).toBe(true)
  })
})
