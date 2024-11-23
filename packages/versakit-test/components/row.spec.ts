import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { VerRow } from '../../versakit-ui/index'

describe('VerRow', () => {
  // 组件应能正确挂载并渲染
  it('组件应能正确挂载并渲染', () => {
    const wrapper = mount(VerRow)
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('.ver-row').exists()).toBe(true)
  })
})
