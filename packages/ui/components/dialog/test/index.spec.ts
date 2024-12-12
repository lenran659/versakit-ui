import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VerDialog from '../src/index.vue'

describe('VerDialog', () => {
  // 基础渲染测试
  it('测试是否正确渲染', () => {
    const wrapper = mount(VerDialog)
    expect(wrapper.exists()).toBe(true)
  })

  // Props 测试
  // it('测试 visible prop', async () => {
  //   const wrapper = mount(VerDialog, {
  //     props: {
  //       modelValue: true,
  //     },
  //   })
  //   expect(wrapper.isVisible()).toBe(true)

  //   await wrapper.setProps({ modelValue: false })

  //   expect(wrapper.isVisible()).toBe(false)
  // })

  it('测试 title prop', () => {
    const title = '对话框标题'
    const wrapper = mount(VerDialog, {
      props: { title },
    })
    expect(wrapper.find('.ver-dialog_title').text()).toBe(title)
  })

  // 事件测试
  it('测试关闭按钮点击事件', async () => {
    const wrapper = mount(VerDialog)
    await wrapper.find('.ver-dialog_headerbtn').trigger('click')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([false])
  })

  // 插槽测试
  it('测试默认插槽', () => {
    const wrapper = mount(VerDialog, {
      slots: {
        default: '<div class="custom-content">测试内容</div>',
      },
    })
    expect(wrapper.find('.custom-content').exists()).toBe(true)
    expect(wrapper.find('.custom-content').text()).toBe('测试内容')
  })

  it('测试 footer 插槽', () => {
    const wrapper = mount(VerDialog, {
      slots: {
        footer: '<button class="custom-button">确定</button>',
      },
    })
    expect(wrapper.find('.custom-button').exists()).toBe(true)
    expect(wrapper.find('.custom-button').text()).toBe('确定')
  })
})
