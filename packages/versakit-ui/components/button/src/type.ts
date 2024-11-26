type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | ''

export interface ButtonProps {
  type?: ButtonType
  ghost?: boolean
  round?: boolean
  plain?: boolean
  empty?: boolean
  line?: boolean
  disabled?: boolean
}
