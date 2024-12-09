type TagType = 'primary' | 'success' | 'warning' | 'error' | 'info'
type sizeType = 'large' | 'default' | 'small'

export interface TagProps {
  type?: TagType
  plain?: boolean
  size?: sizeType
  round?: boolean
}
