type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | ''

export interface ButtonProps {
  type?: ButtonType
  plain?: boolean
  round?: boolean
  disabled?: boolean
}
