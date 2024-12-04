type NotifivationType = 'success' | 'warning' | 'info' | 'error'

export interface NotifivationProps {
  type?: NotifivationType
  title?: string
  plain?: boolean
  content?: string
  duration?: number
  destroy?: () => void
}
