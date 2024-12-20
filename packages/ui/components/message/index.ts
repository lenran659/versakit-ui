import { h, render, ref } from 'vue'
import VerMessage from './src/index.vue'
import type { MessageProps } from './type/index'

const messages = ref<any>([])

// 对外暴露的函数，用于创建并展示新的消息
export default ({ type, plain, content, duration = 3000 }: MessageProps) => {
  const container = document.createElement('div')
  const id = Math.random().toString(36).substr(2, 9)

  const onDestroy = () => {
    const idx = messages.value.findIndex((item: any) => item.id === id)
    if (idx === -1) return
    messages.value.splice(idx, 1)

    render(null, container)
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
  render(vnode, container)

  document.body.appendChild(container.firstElementChild!)

  const vm = vnode.component!

  messages.value.push({
    type,
    plain,
    content,
    duration,
    destroy: onDestroy,
    id,
    vm,
  })

  // 当消息数量超过5条时，移除最早的那条消息
  if (messages.value.length > 5) {
    messages.value.shift()?.destroy?.()
  }

  return messages.value
}

export const getLastBottomOffset = (id: string) => {
  const idx = messages.value.findIndex((item: any) => item.id === id)
  if (idx <= 0) {
    return 0
  } else {
    const prev = messages.value[idx - 1]
    console.log(prev.vm.exposed!.bottomOffset.value)

    return prev.vm.exposed!.bottomOffset.value
  }
}
