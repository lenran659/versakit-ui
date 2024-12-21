import type { ComType } from '../../../utils/constant'

export interface MessageProps {
  id?: any
  type?: ComType
  content?: string
  duration?: number
  plain?: boolean
  offset?: number
  destroy?: () => void
}
