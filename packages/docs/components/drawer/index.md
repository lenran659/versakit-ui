# Drawer 抽屉

有些时候, `Dialog` 组件并不满足我们的需求, 比如你的表单很长, 亦或是你需要临时展示一些文档, `Drawer` 拥有和 `Dialog` 几乎相同的 API, 在 UI 上带来不一样的体验.

## 基础使用

呼出一个临时的侧边栏, 可以从多个方向呼出

绑定 `v-model`到一个`Boolean`类型的变量。

<demo vue="../../example/drawer/base.vue"></demo>

## Drawer API

### Drawer 属性

| 属性       | 说明     | 类型      | 默认值    |
| ---------- | -------- | --------- | --------- |
| `modelValue`     | 绑定值 | `string`  | `空` |

