type BadegeType = 'success' | 'warning' | 'danger'

// 定义props的类型
export interface BadgeProps {
  type?: BadegeType
  value?: number
  dot?: boolean
  max?: number
}
