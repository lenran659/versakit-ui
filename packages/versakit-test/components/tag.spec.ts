import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { VerTag } from '../../versakit-ui/index'

describe('VerTag', () => {
  // 组件应能正确挂载并渲染
  it('组件应能正确挂载并渲染', () => {
    const wrapper = mount(VerTag)
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('.ver-tag').exists()).toBe(true)
  })
})
