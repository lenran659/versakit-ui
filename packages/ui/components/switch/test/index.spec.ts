import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VerSwitch from '../src/index.vue'

describe('VerSwitch 组件测试', () => {
  it('测试是否有默认样式', () => {
    const wrapper = mount(VerSwitch)
    expect(wrapper.classes()).toContain('ver-switch')
  })

  it('测试默认值是否为 false', () => {
    const wrapper = mount(VerSwitch)
    expect(wrapper.vm.modelValue).toBe(false)
  })

  it('测试 v-model 双向绑定', async () => {
    const wrapper = mount(VerSwitch, {
      props: {
        modelValue: false,
        'onUpdate:modelValue': (e: boolean) =>
          wrapper.setProps({ modelValue: e }),
      },
    })

    await wrapper.trigger('click')
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual([true])
  })

  // it('测试禁用状态', async () => {
  //   const wrapper = mount(VerSwitch, {
  //     props: {
  //       disabled: true,
  //       modelValue: false,
  //     },
  //   })

  //   expect(wrapper.classes()).toContain('is-disabled')
  //   await wrapper.trigger('click')
  //   expect(wrapper.emitted()['update:modelValue']).toBeFalsy()
  // })

  // it('测试自定义颜色', () => {
  //   const wrapper = mount(VerSwitch, {
  //     props: {
  //       modelValue: true,
  //       activeColor: '#ff0000',
  //       inactiveColor: '#00ff00',
  //     },
  //   })

  //   const switchEl = wrapper.find('.ver-switch')
  //   expect(switchEl.attributes('style')).toContain(
  //     'background-color: rgb(255, 0, 0)',
  //   )
  // })

  // it('测试 change 事件', async () => {
  //   const wrapper = mount(VerSwitch, {
  //     props: {
  //       modelValue: false,
  //     },
  //   })

  //   await wrapper.trigger('click')
  //   expect(wrapper.emitted().change).toBeTruthy()
  //   expect(wrapper.emitted().change[0]).toEqual([true])
  // })
})
