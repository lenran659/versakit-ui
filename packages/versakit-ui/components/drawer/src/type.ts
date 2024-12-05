type DirectionType = 'right' | 'left' | 'top' | 'bottom' | ''

export interface DrawerProps {
  title?: string
  modelValue?: boolean
  direction?: DirectionType
}
