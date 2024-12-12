/*
 * @Author: 2171204141@qq.com
 * @Date: 2024-12-08 23:10:39
 * @LastEditors: Dream
 * @Description: Backtop 单元测试
 */
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VerBacktop from '../src/index.vue'
// import VerIcon from '../src/index.vue'

describe('BackTop', () => {
  it('测试是否有默认样式', () => {
    const wrapper = mount(VerBacktop)
    expect(wrapper.classes()).toContain('ver-backTop')
  })

  it('测试 bottom，right 样式的设置', () => {
    const wrapper = mount(VerBacktop, {
      props: {
        bottom: '100',
        right: '80',
      },
    })
    const divElement = wrapper.find('div')
    expect(divElement.attributes('style')).toContain(`right: 80px;`)
    expect(divElement.attributes('style')).toContain(`bottom: 100px;`)
  })

  // it('测试 icon 是否正确渲染', () => {
  //   const wrapper = mount(VerBacktop, {
  //     props: {
  //       icon: 'arrow-up',
  //     },
  //   })
  //   const iconElement = wrapper.findComponent(VerIcon)
  //   expect(iconElement.exists()).toBe(true)
  //   expect(iconElement.props('name')).toBe('arrow-up')
  // })

  // it('测试 iconColor 是否正确渲染', () => {
  //   const wrapper = mount(VerBacktop, {
  //     props: {
  //       icon: 'arrow-up',
  //       iconColor: '#009124',
  //     },
  //   })
  //   const iconElement = wrapper.findComponent(VerIcon)
  //   expect(iconElement.props('color')).toBe('#009124')
  // })
})
