# Button 按钮

<p>常用的操作按钮。</p>

## 基础使用

<p> 使用  <code>type</code>、<code>plain</code>、<code>round</code> 来定义按钮的样式。</p>

<demo vue="../../example/button/base.vue"></demo>

## 禁止状态

<p>您可以使用 disabled 属性来定义按钮是否被禁用。</p>
<p>使用 disabled 属性来控制按钮是否为禁用状态。 该属性接受一个 Boolean 类型的值。</p>

<demo vue="../../example/button/disabled.vue"></demo>

## Button API

### Button 属性

| 属性       | 说明                                                                                              | 类型      | 默认值    |
| ---------- | ------------------------------------------------------------------------------------------------- | --------- | --------- |
| `type`     | 按钮的类型，例如可以是 `primary`（主要按钮）、`secondary`（次要按钮）等不同分类来表示不同样式风格 | `string`  | `default` |
| `plain`    | 用于指示按钮是否为朴素按钮样式，朴素按钮通常是背景透明、只有文字和边框等简单样式呈现              | `boolean` | `false`   |
| `round`    | 判断按钮是否呈现圆角的外观效果                                                                    | `boolean` | `false`   |
| `disabled` | 确定按钮是否处于禁用状态，禁用状态下按钮不可点击，常通过变灰等视觉样式体现                        | `boolean` | `false`   |
