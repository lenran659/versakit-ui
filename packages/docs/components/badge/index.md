# Badge 徽章

<p>按钮和图标上的数字或状态标记。</p>

## 基础使用

<p> 可以用来展示新消息的数量。</p>

<demo vue="../../example/badge/base.vue"></demo>

## 最大值

<p>你还可以自定义最大值</p>

<p>由 max 属性定义，接受 Number 值。 请注意，仅在值也是 Number 时起作用。</p>

<demo vue="../../example/badge/max.vue"></demo>


## 小红点​

通过一个小红点标记来告知用户有新内容。

使用 dot 属性。 是个布尔值。

<demo vue="../../example/badge/dot.vue"></demo>

## Badge API

### Badge 属性

| 属性       | 说明     | 类型      | 默认值    |
| ---------- | -------- | --------- | --------- |
| `type`     | 按钮的类型，例如可以是 `primary`（主要按钮）、`secondary`（次要按钮）等不同分类来表示不同样式风格 | `string`  | `default` |
| `max`    |  最大值  | `number` | `99`   |
| `value`    |  值  | `number` | `0`   |
| `dot` | 判断是否使用小红点   | `boolean` | `false`   |
