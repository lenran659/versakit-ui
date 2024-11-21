import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { VerTag } from '../../versakit-ui/index'

describe('VerTag', () => {
  it('renders correctly', () => {
    const wrapper = mount(VerTag, {
      slots: {
        default: '标签',
      },
    })

    expect(wrapper.text()).toBe('标签')
  })

  it('renders correctly', () => {
    const wrapper = mount(VerTag, {
      slots: {
        default: '标签',
      },
      props: {
        type: 'primary',
      },
    })

    expect(wrapper.text()).toBe('标签')
    expect(wrapper.props('type')).toContain('primary')
  })
})
