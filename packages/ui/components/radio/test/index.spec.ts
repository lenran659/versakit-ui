import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VerRadio from '../src/index.vue'

describe('Radio 组件测试', () => {
  // 保留原有的样式测试
  it('测试是否有默认样式', () => {
    const wrapper = mount(VerRadio)
    expect(wrapper.classes()).toContain('ver-radio')
  })

  // 测试 v-model 绑定
  // it('测试 v-model 绑定功能', async () => {
  //   const wrapper = mount(VerRadio, {
  //     props: {
  //       modelValue: false,
  //       'onUpdate:modelValue': (e: boolean) =>
  //         wrapper.setProps({ modelValue: e }),
  //     },
  //   })

  //   await wrapper.find('input[type="radio"]').setValue(true)
  //   expect(wrapper.props('modelValue')).toBe(true)
  // })

  // 测试禁用状态
  it('测试禁用状态', async () => {
    const wrapper = mount(VerRadio, {
      props: {
        disabled: true,
      },
    })
    expect(wrapper.classes()).toContain('is-disabled')
    expect(
      (wrapper.find('input[type="radio"]').element as HTMLInputElement)
        .disabled,
    ).toBe(true)
  })

  // 测试 label 属性
  it('测试 label 显示', () => {
    const label = '选项1'
    const wrapper = mount(VerRadio, {
      props: {
        label,
      },
    })
    expect(wrapper.text()).toContain(label)
  })

  // 测试点击事件
  it('测试点击事件', async () => {
    const wrapper = mount(VerRadio)
    await wrapper.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('click')
  })
})
