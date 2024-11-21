import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { VerContainer } from '../versakit-ui/index'

describe('VerContainer', () => {
  // 组件应能正确挂载并渲染
  it('组件应能正确挂载并渲染', () => {
    const wrapper = mount(VerContainer)
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('.ver-container').exists()).toBe(true)
  })
})
