# Badge 徽标

## 基础用法

可以通过设置`type`属性改变徽标类型

<demo vue="../../example/badge/base.vue"></demo>

## 数字徽标

当徽标中数字大于`99`时候会显示`99+`，使用数字徽标需将`type`属性设置为`number`

<demo vue="../../example/badge/number.vue"></demo>

## Badge API

### Badge 属性

| 属性    | 说明           | 类型            | 默认值  |
| ------- | -------------- | --------------- | ------- |
| `type`  | 指定徽标的类型 | `string`        | `"dot"` |
| `value` | 徽标显示的值   | `num`、`string` |         |
