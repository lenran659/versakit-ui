import type { ComType, SizeType } from '../../../utils/constant'

export interface ButtonProps {
  type?: ComType
  ghost?: boolean
  round?: boolean
  plain?: boolean
  text?: boolean
  shade?: boolean
  slide?: boolean
  disabled?: boolean
  size?: SizeType
  color?: string
  circle?: boolean
  icon?: string
}
