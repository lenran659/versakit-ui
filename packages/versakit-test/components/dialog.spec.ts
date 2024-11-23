import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { VerDialog } from '../../versakit-ui/index'

describe('VerDialog', () => {
  // 组件应能正确挂载并渲染
  it('组件应能正确挂载并渲染', () => {
    const wrapper = mount(VerDialog)
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('.ver-dialog').exists()).toBe(true)
  })
})
