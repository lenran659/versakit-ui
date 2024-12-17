type ShapType = 'circle' | 'square'

export interface AvatarProps {
  shape?: ShapType
  src?: string
  size?: number
  fit?: Fit
}

export enum Fit {
  fill = 'fill',
  contain = 'contain',
  cover = 'cover',
  none = 'none',
  scaledown = 'scale-down',
}
