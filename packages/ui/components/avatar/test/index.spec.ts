/*
 * @Author: 2171204141@qq.com
 * @Date: 2024-12-08 23:10:39
 * @LastEditors: Jannik 1337741710@qq.com
 * @Description: avatar 单元测试
 */
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VerAvatar from '../src/index.vue'

describe('Avatar', () => {
  it('测试是否存在默认样式', () => {
    const wrapper = mount(VerAvatar)
    expect(wrapper.classes()).toContain('ver-avatar')
    expect(wrapper.classes()).toContain('is-circle')
  })

  it('测试传入不同 src 值，img 标签的 src 属性的设置', () => {
    const srcValue = 'https://via.placeholder.com/300x400?text=1'
    const wrapper = mount(VerAvatar, {
      props: {
        src: srcValue,
      },
    })
    const imgElement = wrapper.find('img')
    expect(imgElement.attributes('src')).toBe(srcValue)
  })

  it('传入不同的size，宽高是否正确', () => {
    const sizeValue = 100
    const wrapper = mount(VerAvatar, {
      props: {
        size: sizeValue,
      },
    })
    const spanElement = wrapper.find('span')
    expect(spanElement.attributes('style')).toContain(`width: ${sizeValue}px;`)
    expect(spanElement.attributes('style')).toContain(`height: ${sizeValue}px;`)
  })

  it('测试组件的 shape 的类名变化', () => {
    const wrapper = mount(VerAvatar, {
      props: {
        shape: 'square',
      },
    })
    expect(wrapper.classes()).toContain('is-square')
  })

  it('测试 img 标签是否生成', () => {
    const wrapper = mount(VerAvatar)
    const imgElement = wrapper.find('img')
    expect(imgElement.exists()).toBe(true)
  })

  it('测试是否生成用户传入的class', () => {
    const wrapper = mount(VerAvatar, {
      attrs: {
        class: 'class-value',
      },
    })
    expect(wrapper.classes()).toContain('class-value')
  })
})
