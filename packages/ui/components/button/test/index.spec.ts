import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VerButton from '../src/index.vue'

describe('button', () => {
  it('测试是否有默认样式', () => {
    const wrapper = mount(VerButton)
    expect(wrapper.classes()).toContain('ver-btn')
  })

  it('测试type', () => {
    const wrapper = mount(VerButton, {
      props: {
        type: 'success',
      },
    })
    expect(wrapper.classes()).toContain(`ver-btn-success`)
  })
})
