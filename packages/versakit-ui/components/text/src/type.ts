type TextType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | ''

export interface TextProps {
  type?: TextType
  size?: string | number
  truncated?: boolean
}
