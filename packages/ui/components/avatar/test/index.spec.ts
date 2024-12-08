import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VerAvatar from '../src/index.vue'

describe('VerAvatar', () => {
  // 传入不同 src 值时，img 标签的 src 属性应正确设置
  it('传入不同 src 值时，img 标签的 src 属性应正确设置', () => {
    const testSrc = 'https://example.com/test.jpg'
    const wrapper = mount(VerAvatar, {
      props: {
        src: testSrc,
      },
    })
    const imgElement = wrapper.find('img')
    expect(imgElement.attributes('src')).toBe(testSrc)
  })
})
