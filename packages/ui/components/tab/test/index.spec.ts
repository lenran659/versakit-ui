import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VerTab from '../src/index.vue'

describe('VerTab', () => {
  it('测试组件是否能正常渲染', () => {
    const tabList = [
      { id: 1, label: 'Tab 1', name: 'tab1' },
      { id: 2, label: 'Tab 2', name: 'tab2' },
    ]
    const wrapper = mount(VerTab, {
      props: {
        tabList: tabList as any,
      },
    })
    expect(wrapper.exists()).toBe(true)
  })
})
