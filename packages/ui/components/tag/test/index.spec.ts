import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VerTag from '../src/index.vue'

describe('tag', () => {
  it('测试是否有默认样式', () => {
    const wrapper = mount(VerTag)
    expect(wrapper.classes()).toContain('ver-tag')
  })

  const size = ['small', 'default', 'large']
  size
    .filter((s) => s !== 'default')
    .forEach((item) => {
      it(`测试type:${item}`, () => {
        const wrapper = mount(VerTag, {
          props: {
            size: item as any,
          },
        })
        expect(wrapper.classes()).toContain(`is-${item}`)
      })
    })

  it('测试plain', () => {
    const wrapper = mount(VerTag, {
      props: {
        plain: true,
      },
    })
    expect(wrapper.classes()).toContain('is-plain')
  })

  it('测试round', () => {
    const wrapper = mount(VerTag, {
      props: {
        round: true,
      },
    })
    expect(wrapper.classes()).toContain('is-round')
  })

  const types = ['success', 'primary', 'warning', 'error', 'info']
  types.forEach((type) => {
    it(`测试type:${type}`, () => {
      const wrapper = mount(VerTag, {
        props: {
          type: type as any,
        },
      })
      expect(wrapper.classes()).toContain(`ver-tag-${type}`)
    })
  })

  const typesII = ['success', 'primary', 'warning', 'error', 'info']
  typesII.forEach((type) => {
    it(`测试type:${type} 和plain`, () => {
      const wrapper = mount(VerTag, {
        props: {
          type: type as any,
          plain: true,
        },
      })
      expect(wrapper.classes()).toContain(`ver-tag-${type}`)
      expect(wrapper.classes()).toContain(`is-plain`)
    })
  })
})
