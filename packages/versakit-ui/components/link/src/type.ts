type LinkType =
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'text'
  | ''

export interface LinkProps {
  type?: LinkType
  disabled?: boolean
  href?: string
}
