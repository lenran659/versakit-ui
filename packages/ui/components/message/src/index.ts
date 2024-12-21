import { h, render, shallowReactive } from 'vue'
import VerMessage from './index.vue'
import type { MessageProps } from '../type/index'

const instances: any = shallowReactive([])
let seed = 1

export const Message = ({
  type,
  content,
  plain,
  duration = 3000,
}: MessageProps) => {
  const id = `message_${seed++}`
  const container = document.createElement('div')

  // 删除数组中的实例 | 销毁
  const onDestroy = () => {
    const idx = instances.findIndex((instance: any) => instance.id === id)
    if (idx === -1) return
    instances.splice(idx, 1)
    render(null, container)
  }

  const newProps = {
    type,
    content,
    plain,
    duration,
    id,
    destroy: onDestroy,
  }

  const vnode = h(VerMessage, newProps)

  render(vnode, container)

  document.body.appendChild(container.firstElementChild!)

  const vm = vnode.component!

  const instance = {
    id,
    vnode,
    vm,
    props: newProps,
  }
  instances.push(instance)

  return instance
}

export const getLastBottomOffset = (id: string) => {
  const idx = instances.findIndex((instance: any) => instance.id === id)
  if (idx <= 0) {
    return 0
  } else {
    const prev = instances[idx - 1]
    return prev.vm.exposed!.bottomOffset.value + 50
  }
}
