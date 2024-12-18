<!--
 * @Author: 2171204141@qq.com
 * @Date: 2024-12-17 19:21:01
 * @LastEditors: Dream
 * @Description: Description 组件文档
-->

# Description 对话框

## 基础用法

在保留当前页面状态的情况下，告知用户并承载相关操作。
绑定 `v-model`到一个`Boolean`类型的变量。

<demo vue="../../example/descriptions/base.vue"></demo>

## Description API

### Description 属性

| 属性         | 说明         | 类型     | 默认值 |
| ------------ | ------------ | -------- | ------ |
| `title`      | 标题         | `string` | `空`   |
| `modelValue` | 绑定值       | `string` | `空`   |
| `width`      | dialog的宽度 | `string` | `30%`  |
| `top`        | 距顶部距离   | `string` | `15vh` |

### Description 插槽

| 插槽名   | 说明               |
| -------- | ------------------ |
| `title`  | dialog的标题部分   |
| `footer` | dialog的footer部分 |
