import type { ComType } from '../../../utils/constant'
type positionType = 'top-right' | 'top-left' | 'bottom-left' | 'bottom-right'

export interface NotifivationProps {
  id?: any
  type?: ComType
  title?: string
  plain?: boolean
  content?: string
  offset?: number | string
  duration?: number
  position?: positionType
  destroy?: () => void
}
