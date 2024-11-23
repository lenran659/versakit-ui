import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { VerTextarea } from '../../versakit-ui/index'

describe('VerTextarea', () => {
  // 组件应能正确挂载并渲染
  it('组件应能正确挂载并渲染', () => {
    const wrapper = mount(VerTextarea)
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('.ver-textarea').exists()).toBe(true)
  })
})
