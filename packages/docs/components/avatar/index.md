# Avatar 头像

<p>Avatar 组件可以用来代表人物或对象， 支持使用图片、图标或者文字作为 Avatar。</p>

## 基础用法

<p>
使用 <code>shape</code> 和 <code>size</code> 属性来设置Avatar的形状和大小。
</p>

<demo vue="../../example/avatar/base.vue"></demo>

## Avatar API

### Avatar 属性

| 属性       | 说明     | 类型      | 默认值    |
| ---------- | -------- | --------- | --------- |
| `src`     | 图片资源的路径 | `string`  | `空` |
| `size`     | 尺寸大小 | `number`  | `50` |
| `shape`     | 头像的形状，例如`square`、`circle` | `string`  | `circle` |

  src: '',
  size: 50,
  shape: 'circle',