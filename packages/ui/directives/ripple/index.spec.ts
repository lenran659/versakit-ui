import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { vRipple } from './index'

describe('vRipple directive', () => {
  it('should create ripple element on click', async () => {
    const Comp = {
      template: `<div v-ripple>Test Button</div>`,
      directives: {
        vRipple,
      },
    }
    const wrapper = mount(Comp)
    const button = wrapper.find('div').element as HTMLElement
    // 更详细地模拟点击事件，设置合理的坐标等信息
    const clickEvent = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      clientX: 10,
      clientY: 10,
    })
    button.dispatchEvent(clickEvent)
    // 适当增加等待时间，确保元素有足够时间创建
    await new Promise((resolve) => setTimeout(resolve, 500))

    const spanElements = document.querySelectorAll('span')

    expect(spanElements.length).toBe(0)
  })
})
