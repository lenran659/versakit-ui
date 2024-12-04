import { h, render } from 'vue'
import VerMessage from './src/index.vue'
import { MessageProps } from './src/type'

export default ({ type, plain, content, duration = 3000 }: MessageProps) => {
  const onDestroy = () => {
    // 3. message 销毁
    render(null, document.body)
  }

  // 1. 返回 vnode
  const vnode = h(VerMessage, {
    type,
    content,
    duration,
    plain,
    destroy: onDestroy,
  })

  // 2. render
  render(vnode, document.body)
}
