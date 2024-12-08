type TextType = 'primary' | 'success' | 'warning' | 'error' | 'info'

export interface TextProps {
  type?: TextType
  size?: 'small' | 'large' | 'default'
  truncated?: boolean
}
