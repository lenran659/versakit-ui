type BadgeType = 'dot' | 'rim'
type BadgePosition = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'

export interface BadgeProps {
  type?: BadgeType
  position?: BadgePosition
}
