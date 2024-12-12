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

  const type = ['success', 'warning', 'info', 'error']
  type.forEach((type) => {
    it(`测试${type}`, () => {
      const props = {
        type: type,
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

  const typePlain = ['success', 'warning', 'info', 'error']
  typePlain.forEach((type) => {
    it(`测试${type}-plain`, () => {
      const props = {
        type: type,
        plain: true,
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
})
