# Tag 标签

用于标记和选择。

## 基础用法

由`type`属性来选择 tag 类型。也能通过`plain`让 tag 的背景变得半透明，可以通过`color`属性自定义颜色。

<demo vue="../../example/tag/base.vue"></demo>

## Tag API

### Tag 属性

| 属性       | 说明     | 类型      | 默认值    |
| ---------- | -------- | --------- | --------- |
| `type`     | Tag 的类型，可以选择以下类型：primary、success、info、warning、danger  | `string`  | `primary` |
| `plain`     | 背景是否半透明 | `boolean`  | `false` |
| `round`     | Tag 是否为圆角 | `boolean`  | `false` |