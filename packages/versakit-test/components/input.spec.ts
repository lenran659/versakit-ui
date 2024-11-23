import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { VerInput } from '../../versakit-ui/index'

describe('VerInput', () => {
  // 组件应能正确挂载并渲染
  it('组件应能正确挂载并渲染', () => {
    const wrapper = mount(VerInput)
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('.ver-input').exists()).toBe(true)
  })
})
