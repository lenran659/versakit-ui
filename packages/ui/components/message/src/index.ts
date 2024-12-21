import { h, render, ref } from 'vue'
import VerMessage from './index.vue'
import type { MessageProps } from '../type/index'

const messages = ref<any>([])
const id = Math.random().toString(36).substr(2, 9)
export const Message = ({
  type,
  plain,
  content,
  duration = 3000,
}: MessageProps) => {
  const container = document.createElement('div')

  const onDestroy = () => {
    const index = messages.value.findIndex((item: any) => item.id === id)
    if (index === -1) return
    messages.value.splice(index, 1)
    render(null, container)
  }

  const vnode = h(VerMessage, {
    type,
    content,
    duration,
    plain,
    destroy: onDestroy,
  })

  render(vnode, container)

  document.body.appendChild(container.firstElementChild!)

  const vm = vnode.component!

  messages.value.push({
    id,
    type,
    plain,
    content,
    duration,
    destroy: onDestroy,
    vm,
  })
}

export const getLastBottomOffset = (id: string) => {
  const index = messages.value.findIndex((item: any) => item.id === id)
  if (index <= 0) {
    return 0
  } else {
    const prev = messages.value[index - 1]
    return prev.vm.exposed!.bottomOffset.value
  }
}
