type directionType = '' | 'horizontal' | 'vertical'

export interface DescriptionsProps {
  border?: boolean
  direction?: directionType
  column?: number
  title?: string
  extra?: string
}
export interface DescriptionItem {
  label: string
  value: string
  span?: number
  rowSpan?: number
}
