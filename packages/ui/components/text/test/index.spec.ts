import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VText from '../src/index.vue'

describe('text', () => {
  it('测试是否有默认样式', () => {
    const wrapper = mount(VText)
    expect(wrapper.classes()).toContain('v-text')
  })

  const types = ['success', 'primary', 'warning', 'error', 'info']
  types.forEach((type) => {
    it(`测试type:${type}`, () => {
      const wrapper = mount(VText, {
        props: {
          type: type as any,
        },
      })
      expect(wrapper.classes()).toContain(`text-${type}`)
    })
  })

  const size = ['small', 'default', 'large']
  size
    .filter((s) => s !== 'default')
    .forEach((item) => {
      it(`测试type:${item}`, () => {
        const wrapper = mount(VText, {
          props: {
            size: item as any,
          },
        })
        expect(wrapper.classes()).toContain(`is-${item}`)
      })
    })

  it('测试truncated', () => {
    const wrapper = mount(VText, {
      props: {
        truncated: true,
      },
    })
    expect(wrapper.classes()).toContain('is-truncated')
  })
})
