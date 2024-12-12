import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VerDrawer from '../src/index.vue'

describe('drawer', () => {
  it('测试是否有默认样式', () => {
    const wrapper = mount(VerDrawer)
    expect(wrapper.exists()).toBe(true)
  })
})
