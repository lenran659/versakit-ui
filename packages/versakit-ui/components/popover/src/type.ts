type placementType =
  | 'top-left'
  | 'bottom-left'
  | 'bottom-right'
  | 'bottom-center'
  | 'top-right'
  | 'top-center'

export interface PopOverProps {
  placement?: placementType
}
