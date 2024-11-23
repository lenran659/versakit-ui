import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { VerHeader } from '../../versakit-ui/index'

describe('VerHeader', () => {
  // 组件应能正确挂载并渲染
  it('组件应能正确挂载并渲染', () => {
    const wrapper = mount(VerHeader)
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('.ver-header').exists()).toBe(true)
  })
})
