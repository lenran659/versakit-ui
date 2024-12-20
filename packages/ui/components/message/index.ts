import { h, render, ref } from 'vue'
import VerMessage from './src/index.vue'
import type { MessageProps } from './type/index'

const messages = ref<MessageProps[]>([])

const removeMessage = (id: string) => {
  messages.value = messages.value.filter((message) => message.id !== id)
  renderMessages()
}

const renderMessages = () => {
  const container =
    document.querySelector('.ver-message-container') ||
    document.createElement('div')
  container.className = 'ver-message-container'
  document.body.appendChild(container)

  render(
    h(
      'div',
      messages.value.map((message) => h(VerMessage, message)),
    ),
    container,
  )
}

export default ({ type, plain, content, duration = 3000 }: MessageProps) => {
  const id = Math.random().toString(36).substr(2, 9)
  const onDestroy = () => {
    removeMessage(id)
  }

  messages.value.push({
    type,
    plain,
    content,
    duration,
    destroy: onDestroy,
    id,
  })

  if (messages.value.length > 5) {
    messages.value.shift()?.destroy?.()
  }

  renderMessages()
}
