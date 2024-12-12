# Message 消息提示

常用于主动操作后的反馈提示。 与 Notification 的区别是后者更多用于系统级通知的被动提醒。

## 基本用法

从顶部出现，3 秒后自动消失。

<demo vue="../../example/message/base.vue"></demo>

## 不同状态

用来显示「成功、警告、消息、错误」类的操作反馈。

<demo vue="../../example/message/status.vue"></demo>

## Message API

### Message 属性

| 属性       | 说明     | 类型      | 默认值    |
| ---------- | -------- | --------- | --------- |
| `type`     | 绑定值 | `string`  | `info` |
| `content`     | 消息的内容 | `string`  | `空` |
| `duration`     | 消息的持续时间 | `number`  | `0` |
| `destroy`     | message 的销毁函数 | `function`  | `空` |
