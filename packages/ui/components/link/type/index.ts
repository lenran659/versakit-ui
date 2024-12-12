type LinkType = 'primary' | 'success' | 'warning' | 'error' | 'info'

export interface LinkProps {
  type?: LinkType
  disabled?: boolean
  href?: string
}
