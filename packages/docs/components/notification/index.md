# Notification 通知

悬浮出现在页面角落，显示全局的通知提醒消息。

## 基础用法

<demo vue="../../example/notification/base.vue"></demo>

## 不同类型

<demo vue="../../example/notification/type.vue"></demo>

## 不同风格

<demo vue="../../example/notification/plain.vue"></demo>

## 不同方向

<demo vue="../../example/notification/position.vue"></demo>

## Notification API

### Notification 属性

| 属性         | 说明                    | 类型       | 默认值 |
| ------------ | ----------------------- | ---------- | ------ |
| `title`      | 标题                    | `string`   | `空`   |
| `modelValue` | 绑定值                  | `string`   | `空`   |
| `duration`   | notification 的持续时间 | `number`   | `0`    |
| `destroy`    | notification 的销毁函数 | `function` | `空`   |
