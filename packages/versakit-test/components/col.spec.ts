import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { VerCol } from '../../versakit-ui/index'

describe('VerCol', () => {
  it('应该挂载组件且初始时可见', () => {
    const wrapper = mount(VerCol)
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.isVisible()).toBe(true)
  })

  it('当 span 属性使用默认值6时,组件应应用默认类名', () => {
    const wrapper = mount(VerCol, {
      props: {
        span: 6,
      },
    })

    expect(wrapper.classes()).toContain('ver-col')
  })
})
