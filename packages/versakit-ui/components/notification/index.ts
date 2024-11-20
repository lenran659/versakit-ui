import { render, h } from 'vue'
import VerNotification from './index.vue'

interface Options {
  title: string
  content: string
  duration?: number
}

export default ({ title, content, duration = 3000 }: Options) => {
  /**
   * 动画结束时的回调
   */
  // 3. VerNotification 销毁
  const onDestroy = () => {
    render(null, document.body)
  }

  // 1. 返回 vnode
  const vnode = h(VerNotification, {
    title,
    content,
    duration,
    destroy: onDestroy,
  })

  // 2. render
  render(vnode, document.body)
}
