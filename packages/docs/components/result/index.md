# Result 结果页

<p>用于反馈一系列操作任务的处理结果。</p>

## 何时使用

当有重要操作需告知用户处理结果，且反馈内容较为复杂时使用。

## 演示

<demo vue="../../example/result/success.vue"></demo>
<demo vue="../../example/result/error.vue"></demo>
<demo vue="../../example/result/warning.vue"></demo>
<demo vue="../../example/result/info.vue"></demo>
<demo vue="../../example/result/403.vue"></demo>
<demo vue="../../example/result/404.vue"></demo>
<demo vue="../../example/result/500.vue"></demo>

## Result API

### Result 属性

| 属性       | 说明                      | 类型     | 默认值    |
| ---------- | ------------------------- | -------- | --------- |
| `status`   | 结果的状态,决定图标和颜色 | `string` | `success` |
| `iconName` | 决定图标                  | `string` | `success` |

### Result 插槽

| 插槽名    | 说明           |
| --------- | -------------- |
| `content` | 自定义内容文字 |
