export interface BackTopProps {
  right?: string
  bottom?: string
  visibleHeight?: string
  icon?: string
  iconColor?: string
  visibilityHeight?: string
}
export const BacktopEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}
export type BacktopEmits = typeof BacktopEmits
