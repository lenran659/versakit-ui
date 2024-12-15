import type { ComType } from '../../../utils/constant'
type positionType = 'top-right' | 'top-left' | 'bottom-left' | 'bottom-right'

export interface NotifivationProps {
  type?: ComType
  title?: string
  plain?: boolean
  content?: string
  duration?: number
  position?: positionType
  destroy?: () => void
}
