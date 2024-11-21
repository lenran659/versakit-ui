import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { VerDrawer } from '../versakit-ui/index'

describe('VerDrawer', () => {
  // 组件应能正确挂载并渲染
  it('组件应能正确挂载并渲染', () => {
    const wrapper = mount(VerDrawer)
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('.ver-drawer').exists()).toBe(true)
  })
})
