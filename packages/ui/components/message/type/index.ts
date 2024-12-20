import type { ComType } from '../../../utils/constant'

export interface MessageProps {
  type?: ComType
  content?: string
  duration?: number
  plain?: boolean
  destroy?: () => void
  id?: string
}
