import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { VerForm } from '../versakit-ui/index'

describe('VerForm', () => {
  // 组件应能正确挂载并渲染
  it('组件应能正确挂载并渲染', () => {
    const wrapper = mount(VerForm)
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('.ver-form').exists()).toBe(true)
  })
})
