type ShapType = 'circle' | 'square'

export interface AvatarProps {
  shape?: ShapType
  src: string
  size: number
}
