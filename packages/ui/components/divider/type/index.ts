import type { DirectionType } from '../../../utils/constant'

type lineType =
  | 'solid'
  | 'dashed'
  | 'dotted'
  | 'double'
  | 'groove'
  | 'ridge'
  | 'inset'
  | 'outset'

export interface DividerProps {
  line?: lineType
  position?: string
  direction?: DirectionType
}
