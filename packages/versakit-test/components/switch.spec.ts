import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { VerSwitch } from '../../versakit-ui/index'

describe('VerSwitch', () => {
  // 组件应能正确挂载并渲染
  it('组件应能正确挂载并渲染', () => {
    const wrapper = mount(VerSwitch)
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('.ver-switch').exists()).toBe(true)
  })
})
