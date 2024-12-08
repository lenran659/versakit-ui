import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VerNotifcation from '../src/index.vue'

describe('notification', () => {
  it('测试是否有默认样式', () => {
    const wrapper = mount(VerNotifcation)
    expect(wrapper.classes()).toContain('ver-notification')
  })
})
