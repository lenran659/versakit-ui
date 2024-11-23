import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { VerRadio } from '../../versakit-ui/index'

describe('VerRadio', () => {
  // 组件应能正确挂载并渲染
  it('组件应能正确挂载并渲染', () => {
    const wrapper = mount(VerRadio)
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('.ver-radio').exists()).toBe(true)
  })
})
