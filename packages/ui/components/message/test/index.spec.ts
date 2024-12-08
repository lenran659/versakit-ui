import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VerMessage from '../index'

describe('message', () => {
  it('测试组件是否能正常渲染', () => {
    const props = {
      type: 'info',
      plain: false,
      content: 'Test message',
    }
    const wrapper = mount(VerMessage, {
      props: {
        props,
      },
    })
    expect(wrapper.exists()).toBe(true)
  })
})
