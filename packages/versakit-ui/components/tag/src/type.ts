type TagType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | ''

export interface TagProps {
  type?: TagType
  plain?: boolean
  round?: boolean
}
