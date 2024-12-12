import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import VerPopOver from '../src/index.vue' // 根据实际组件路径调整

describe('VerPopOver', () => {
  it('测试组件是否能正常渲染', () => {
    const wrapper = mount(VerPopOver)
    expect(wrapper.exists()).toBe(true)
  })

  it('测试鼠标移出时是否能触发延迟关闭逻辑', () => {
    const wrapper = mount(VerPopOver)
    const divElement = wrapper.find('.ver-popover')
    const setTimeoutSpy = vi.spyOn(window, 'setTimeout')
    divElement.trigger('mouseleave')
    expect(setTimeoutSpy).toHaveBeenCalled()
  })
})
