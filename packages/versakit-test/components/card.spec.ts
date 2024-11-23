import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { VerCard } from '../../versakit-ui/index'

describe('VerCard', () => {
  // 具名插槽 header 应能正确渲染内容
  it('具名插槽 header 应能正确渲染内容', () => {
    const headerContent = '<h3>这是卡片头部内容</h3>'
    const wrapper = mount(VerCard, {
      slots: {
        header: headerContent,
      },
    })
    const headerSlotElement = wrapper.find('.ver-card-header')
    expect(headerSlotElement.html()).toContain(headerContent)
  })

  // 默认插槽应能正确渲染内容
  it('默认插槽应能正确渲染内容', () => {
    const bodyContent = '<p>这是卡片主体内容</p>'
    const wrapper = mount(VerCard, {
      slots: {
        default: bodyContent,
      },
    })
    const bodySlotElement = wrapper.find('.ver-card-body')
    expect(bodySlotElement.html()).toContain(bodyContent)
  })

  // 同时传入 props 值和使用插槽时组件应整体正确渲染
  it('同时传入 props 值和使用插槽时组件应整体正确渲染', () => {
    const testShadow = 'hover'
    const headerContent = '<h3>综合测试卡片头部内容</h3>'
    const bodyContent = '<p>综合测试卡片主体内容</p>'
    const wrapper = mount(VerCard, {
      props: {
        shadow: testShadow,
      },
      slots: {
        header: headerContent,
        default: bodyContent,
      },
    })
    const cardElement = wrapper.find('.ver-card')
    const headerSlotElement = wrapper.find('.ver-card-header')
    const bodySlotElement = wrapper.find('.ver-card-body')
    // 验证类名及样式
    expect(cardElement.classes()).toContain('ver-card')
    expect(cardElement.classes()).toContain('is-shadow-hover')
    // 验证插槽内容
    expect(headerSlotElement.html()).toContain(headerContent)
    expect(bodySlotElement.html()).toContain(bodyContent)
  })
})
