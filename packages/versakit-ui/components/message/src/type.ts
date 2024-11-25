type MessgeType = 'success' | 'error' | 'warning' | 'info' | ''

export interface MessageProps {
  type?: MessgeType
  content?: string
  duration?: number
  destroy?: () => void
}
