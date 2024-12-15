/**
 * @author Jannik
 * @description 组件类型
 */
export const comtype = ['primary', 'success', 'warning', 'info', 'error']
export type ComType = (typeof comtype)[number]

/**
 * @author Jannik
 * @description 尺寸类型
 */
export const sizetype = ['xs', 'sm', 'md', 'lg']
export type SizeType = (typeof sizetype)[number]

/**
 * @author Jannik
 * @description 方向类型
 */
export const directiontype = ['horizontal', 'vertical']
export type DirectionType = (typeof directiontype)[number]
