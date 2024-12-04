type NotifivationType = 'success' | 'warning' | 'info' | 'error'
type positionType = 'top-right' | 'top-left' | 'bottom-left' | 'bottom-right'

export interface NotifivationProps {
  type?: NotifivationType
  title?: string
  plain?: boolean
  content?: string
  duration?: number
  position?: positionType
  destroy?: () => void
}
