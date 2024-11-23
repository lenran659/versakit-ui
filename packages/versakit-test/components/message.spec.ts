import { describe, it, expect } from 'vitest'
import { VerMessage } from '../../versakit-ui/index'

describe('VerMessage', () => {
  // 应该能正确创建 vnode 并渲染组件
  it('应该能正确创建 vnode 并渲染组件', () => {
    VerMessage({
      type: 'success',
      content: '这是一个成功的消息',
    })

    const messageElement = document.body.querySelector('.ver-message')
    expect(messageElement).not.toBe(null)
  })
})
