type TagType = 'primary' | 'success' | 'warning' | 'error' | 'info'

export interface TagProps {
  type?: TagType
  plain?: boolean
  round?: boolean
}
