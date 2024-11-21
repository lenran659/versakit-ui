import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { VerAlert } from '../versakit-ui/index'

describe('VerAlert', () => {
  it('当 title 属性使用默认值（空字符串）时，组件标题显示应符合预期', () => {
    const wrapper = mount(VerAlert)
    const titleElement = wrapper.find('span')
    expect(titleElement.text()).toBe('')
  })

  it('传入具体 title 值时，组件应正确渲染该标题内容', () => {
    const testTitle = '这是一个测试提示标题'
    const wrapper = mount(VerAlert, {
      props: {
        title: testTitle,
      },
    })
    const titleElement = wrapper.find('span')
    expect(titleElement.text()).toBe(testTitle)
  })

  it('传入不同 type 值时，组件应应用对应的类名', () => {
    const type = 'info'

    const wrapper = mount(VerAlert, {
      props: {
        type,
      },
    })

    const rootElement = wrapper.find('.ver-alert')
    expect(rootElement.classes()).toContain(`ver-alert-${type}`)
  })

  it('同时传入 title 和 type 属性时，组件应正确渲染标题并应用对应类名', () => {
    const testTitle = '综合测试提示'
    const testType = 'warning'
    const wrapper = mount(VerAlert, {
      props: {
        title: testTitle,
        type: testType,
      },
    })
    const titleElement = wrapper.find('span')
    expect(titleElement.text()).toBe(testTitle)
    const rootElement = wrapper.find('.ver-alert')
    expect(rootElement.classes()).toContain(`ver-alert-${testType}`)
  })

  it('应该挂载组件且初始时可见', () => {
    const wrapper = mount(VerAlert)
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.isVisible()).toBe(true)
  })
})
