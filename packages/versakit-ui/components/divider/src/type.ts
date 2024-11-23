type directionType = 'horizontal' | 'vertical'
type lineType = 'solid' | 'dashed' | 'dotted'

export interface DividerProps {
  line: lineType
  position: string
  direction: directionType
}
