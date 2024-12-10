import { mount } from '@vue/test-utils'
import VerDivider from '../index'
import { describe, it, expect } from 'vitest'

describe('VerDivider', () => {
  it('测试组件是否能正常渲染', () => {
    const props = {
      line: 'solid',
      position: 'left',
      direction: 'horizontal',
    }
    const wrapper = mount(VerDivider, {
      props: {
        props,
      },
    })
    expect(wrapper.exists()).toBe(true)
  })

  const lines = ['solid', 'dashed', 'dotted']
  lines.forEach((line) => {
    it(`测试不同line属性值：${line}`, () => {
      const props = {
        line: line,
        position: 'left',
        direction: 'horizontal',
      }
      const wrapper = mount(VerDivider, {
        props: {
          props,
        },
      })
      expect(wrapper.exists()).toBe(true)
    })
  })

  const positions = ['left', 'center', 'right']
  positions.forEach((position) => {
    it(`测试不同position属性值：${position}`, () => {
      const props = {
        line: 'solid',
        position: position,
        direction: 'horizontal',
      }
      const wrapper = mount(VerDivider, {
        props: {
          props,
        },
      })
      expect(wrapper.exists()).toBe(true)
    })
  })

  // 测试不同的 `direction` 属性值情况
  const directions = ['horizontal', 'vertical']
  directions.forEach((direction) => {
    it(`测试不同direction属性值：${direction}`, () => {
      const props = {
        line: 'solid',
        position: 'left',
        direction: direction,
      }
      const wrapper = mount(VerDivider, {
        props: {
          props,
        },
      })
      expect(wrapper.exists()).toBe(true)
    })
  })
})
