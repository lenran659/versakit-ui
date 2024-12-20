type BadgeType = 'dot' | 'number' | 'text'
type BadgeValue = string | number

export interface BadgeProps {
  type?: BadgeType
  value?: BadgeValue
}
