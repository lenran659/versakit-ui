import { render, h } from 'vue'
import VerNotification from './src/index.vue'
import { NotifivationProps } from './src/type'

export default ({
  type,
  title,
  content,
  plain,
  position,
  duration = 3000,
}: NotifivationProps) => {
  /**
   * 动画结束时的回调
   */
  // 3. VerNotification 销毁
  const onDestroy = () => {
    render(null, document.body)
  }

  // 1. 返回 vnode
  const vnode = h(VerNotification, {
    type,
    title,
    plain,
    content,
    position,
    duration,
    destroy: onDestroy,
  })

  // 2. render
  render(vnode, document.body)
}
