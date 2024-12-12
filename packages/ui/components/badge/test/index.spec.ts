/*
 * @Author: 2171204141@qq.com
 * @Date: 2024-12-08 23:10:39
 * @LastEditors: Dream
 * @Description: badge 单元测试
 */
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VerBadge from '../src/index.vue'

describe('Badge', () => {
  it('测试是否有默认样式', () => {
    const wrapper = mount(VerBadge)
    expect(wrapper.classes()).toContain('ver-badge')
  })

  it('测试设置 type 属性，class 的变化', () => {
    const wrapper = mount(VerBadge, {
      props: {
        type: 'success',
      },
    })
    const badgeElement = wrapper.find('.badge')
    expect(badgeElement.classes()).toContain('badge-success')
  })

  it('测试 value 超过 max 是显示+', () => {
    const wrapper = mount(VerBadge, {
      props: {
        value: 120,
        max: 99,
      },
    })
    const badgeElement = wrapper.find('.badge > span')
    expect(badgeElement.text()).toBe('99+')
  })

  it('测试 value 小于 max 时', () => {
    const wrapper = mount(VerBadge, {
      props: {
        value: 50,
        max: 99,
      },
    })
    const badgeElement = wrapper.find('.badge > span')
    expect(badgeElement.text()).toBe('50')
  })

  it('测试 value = 0 的情况', () => {
    const wrapper = mount(VerBadge, {
      props: {
        value: 0,
      },
    })
    const badgeElement = wrapper.find('.badge > span')
    expect(badgeElement.exists()).toBe(false)
  })
})
