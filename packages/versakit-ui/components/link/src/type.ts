type LinkType =
  | 'primary'
  | 'success'
  | 'warning'
  | 'error'
  | 'info'
  | 'text'
  | ''

export interface LinkProps {
  type?: LinkType
  disabled?: boolean
  href?: string
}
