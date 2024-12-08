type TextType = 'primary' | 'success' | 'warning' | 'error' | 'info' | ''

export interface TextProps {
  type?: TextType
  size?: string | number
  truncated?: boolean
}
