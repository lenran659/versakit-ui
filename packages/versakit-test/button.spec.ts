import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { VerButton } from '../versakit-ui/index'

describe('VerButton', () => {
  it('测试按钮默认状态下的类名和禁用属性', () => {
    const wrapper = mount(VerButton)
    expect(wrapper.classes()).toContain('ver-btn')
    expect(wrapper.classes()).not.toContain('ver-btn-')
    expect(wrapper.classes()).not.toContain('is-plain')
    expect(wrapper.classes()).not.toContain('is-round')
    expect(wrapper.attributes('disabled')).toBeUndefined()
  })

  it('测试设置type属性后类名的变化', () => {
    const typeValue = 'primary'
    const wrapper = mount(VerButton, {
      props: {
        type: typeValue,
      },
    })
    expect(wrapper.classes()).toContain('ver-btn')
    expect(wrapper.classes()).toContain(`ver-btn-${typeValue}`)
  })

  it('测试设置plain属性后类名的变化', () => {
    const wrapper = mount(VerButton, {
      props: {
        plain: true,
      },
    })
    expect(wrapper.classes()).toContain('ver-btn')
    expect(wrapper.classes()).toContain('is-plain')
  })

  it('测试设置round属性后类名的变化', () => {
    const wrapper = mount(VerButton, {
      props: {
        round: true,
      },
    })
    expect(wrapper.classes()).toContain('ver-btn')
    expect(wrapper.classes()).toContain('is-round')
  })

  it('测试设置disabled属性后类名和禁用属性的变化', () => {
    const wrapper = mount(VerButton, {
      props: {
        disabled: true,
      },
    })
    expect(wrapper.classes()).toContain('ver-btn')
    expect(wrapper.classes()).toContain('is-disable')
    expect(wrapper.props('disabled')).toBe(true)
  })
})
