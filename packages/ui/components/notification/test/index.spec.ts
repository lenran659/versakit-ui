import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VerNotifcation from '../index'

describe('notification', () => {
  it('测试组件是否能正常渲染', () => {
    const props = {
      type: 'info',
      plain: false,
      title: 'title',
      content: 'Test message',
    }

    const wrapper = mount(VerNotifcation, {
      props: {
        props,
      },
    })
    expect(wrapper.exists()).toBe(true)
  })
})
