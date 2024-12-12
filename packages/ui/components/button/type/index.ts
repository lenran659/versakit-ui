type ButtonType = 'primary' | 'success' | 'warning' | 'error' | 'info' | ''
type SizeType = 'large' | 'small' | 'default'

export interface ButtonProps {
  type?: ButtonType
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
