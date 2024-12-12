export type InputType =
  | 'text'
  | 'number'
  | 'password'
  | 'textarea'
  | 'url'
  | 'email'
  | 'digit'
  | 'idcard'
  | 'date'
  | 'datetime'
  | 'time'
  | 'month'
  | 'week'
  | 'search'
  | 'color'

export interface InputProps {
  placeholder?: string
  modelValue?: string | number
  disabled?: boolean
  type?: InputType
}
