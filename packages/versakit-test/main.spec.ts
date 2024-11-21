import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { VerMain } from '../versakit-ui/index'

describe('VerMain', () => {
  // 组件应能正确挂载并渲染
  it('组件应能正确挂载并渲染', () => {
    const wrapper = mount(VerMain)
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('.ver-main').exists()).toBe(true)
  })
})
