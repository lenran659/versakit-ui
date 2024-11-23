import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { VerText } from '../../versakit-ui/index'

describe('VerText', () => {
  // 组件应能正确挂载并渲染
  it('组件应能正确挂载并渲染', () => {
    const wrapper = mount(VerText)
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('.ver-text').exists()).toBe(true)
  })
})
