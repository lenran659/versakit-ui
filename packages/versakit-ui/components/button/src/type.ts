type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | ''
type SizeType = 'large' | 'small' | 'medium' | ''

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
}
