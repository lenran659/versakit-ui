# Avatar 头像

<p>Avatar 组件可以用来代表人物或对象， 支持使用图片、图标或者文字作为 Avatar。</p>

## 基础用法

<p>
使用 <code>shape</code> 和 <code>size</code> 属性来设置Avatar的形状和大小。
</p>

<demo vue="../../example/avatar/base.vue"></demo>

## 头像大小

<p>图片的size也支持使用string类型来设置尺寸大小，例如：xs,sm,md,lg</p>

<demo vue="../../example/avatar/size.vue"></demo>

## 展示类型

<p>
支持使用图片或者文字作为 Avatar。
</p>

<demo vue="../../example/avatar/src.vue"></demo>

<p>图片加载失败时，可以使用error属性触发函数，默认触发图片填充效果。</p>

<demo vue="../../example/avatar/error.vue"></demo>

<p>当使用图片作为用户头像时，使用object-fit属性设置该图片如何在容器中展示。</p>

<demo vue="../../example/avatar/fit.vue"></demo>

## Avatar API

### Avatar 属性

| 属性       | 说明     | 类型      | 默认值    |
| ---------- | -------- | --------- | --------- |
| `src`     | 图片资源的路径 | `string`  | `空` |
| `size`     | 尺寸大小 | `number`  `string`  | `50` |
| `shape`     | 头像的形状，例如`square`、`circle` | `string`  | `circle` |
| `fit`     | 头像的填充效果，例如`fill`、`contain`、`cover` | `string`  | `cover` |
| `callback`     | 图片展示失败时展示的图片 | `string`  | `imageErrorHandler()` |
