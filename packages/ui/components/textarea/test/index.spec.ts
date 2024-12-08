import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VerTextArea from '../src/index.vue'

describe('textarea', () => {
  it('测试是否有默认样式', () => {
    const wrapper = mount(VerTextArea)
    expect(wrapper.classes()).toContain('ver-textarea')
  })

  it('应该能正确应用传入的placeholder属性值', () => {
    const placeholderText = '请输入内容'
    const wrapper = mount(VerTextArea, {
      props: {
        placeholder: placeholderText,
      },
    })
    expect(wrapper.find('textarea').attributes('placeholder')).toBe(
      placeholderText,
    )
  })

  it('应该使用默认的modelValue属性值（空字符串）', () => {
    const wrapper = mount(VerTextArea)
    expect(wrapper.vm.modelValue).toBe('')
  })

  it('应该能正确应用传入的disabled属性值为true时的效果', () => {
    const wrapper = mount(VerTextArea, {
      props: {
        disabled: true,
      },
    })
    expect(wrapper.classes()).toContain('is-disabled')
  })

  it('当disabled为false时不应有is-disable样式类', () => {
    const wrapper = mount(VerTextArea, {
      props: {
        disabled: false,
      },
    })
    expect(wrapper.find('.ver-textarea.is-disabled').exists()).toBe(false)
  })
})
