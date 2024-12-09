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

  const type = ['success', 'warning', 'info', 'error']
  type.forEach((type) => {
    it(`测试${type}`, () => {
      const props = {
        type: type,
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

  const typePlain = ['success', 'warning', 'info', 'error']
  typePlain.forEach((type) => {
    it(`测试${type}-plain`, () => {
      const props = {
        type: type,
        plain: true,
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

  const position = ['top-right', 'top-left', 'bottom-left', 'bottom-right']
  position.forEach((position) => {
    it(`测试位置${position}`, () => {
      const props = {
        plain: true,
        title: 'title',
        content: 'Test message',
        position,
      }

      const wrapper = mount(VerNotifcation, {
        props: {
          props,
        },
      })
      expect(wrapper.exists()).toBe(true)
    })
  })
})
