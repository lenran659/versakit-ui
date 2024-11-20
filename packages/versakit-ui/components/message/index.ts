import { h, render } from 'vue'
import VerMessage from './index.vue'

interface Options {
  type: typeEnum
  content: string
  duration?: number
}

type typeEnum = 'success' | 'error' | 'warning' | 'info'

export default ({ type, content, duration = 3000 }: Options) => {
  const onDestroy = () => {
    // 3. message 销毁
    render(null, document.body)
  }

  // 1. 返回 vnode
  const vnode = h(VerMessage, {
    type,
    content,
    duration,
    destroy: onDestroy,
  })

  // 2. render
  render(vnode, document.body)
}
