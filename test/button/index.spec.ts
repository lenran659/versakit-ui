import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { VerButton } from '../../packages/versakit-ui/index'

describe('VerButton', () => {
  it('renders correctly', () => {
    const wrapper = mount(VerButton, {
      slots: {
        default: '按钮',
      },
      props: {
        type: 'primary',
        disable: true,
        plain: true,
      },
    })
    expect(wrapper.text()).toBe('按钮')
    expect(wrapper.props('type')).toContain('primary')
    expect(wrapper.props('disable')).toBe(true)
    expect(wrapper.props('plain')).toBe(true)
  })
})
