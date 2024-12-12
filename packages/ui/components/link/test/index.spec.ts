import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VLink from '../src/index.vue'

describe('link', () => {
  it('测试是否有默认样式', () => {
    const wrapper = mount(VLink)
    expect(wrapper.classes()).toContain('v-link')
  })

  it('测试传递的属性', () => {
    const wrapper = mount(VLink, {
      props: { href: 'https://example.com' },
    })
    expect(wrapper.attributes('href')).toBe('https://example.com')
  })

  it('测试点击事件', async () => {
    const wrapper = mount(VLink)
    await wrapper.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('click')
  })
})
