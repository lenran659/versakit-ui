<!--
 * @Author: 2171204141@qq.com
 * @Date: 2024-12-17 19:14:39
 * @LastEditors: Dream
 * @Description: Avatar 文档
-->

# Avatar 头像

<p>Avatar 组件可以用来代表人物或对象， 支持使用图片、图标或者文字作为 Avatar。</p>

## 基础用法

<p>
使用 <code>shape</code> 和 <code>size</code> 属性来设置 Avatar 的形状和大小。
</p>

<demo vue="../../example/avatar/base.vue"></demo>

## 头像大小

<p>图片的 <code>size</code> 也支持使用 <code>string</code> 类型来设置尺寸大小，例如：<code>xs</code> , <code>s</code> , <code>md</code> , <code>lg</code> 。</p>

<demo vue="../../example/avatar/size.vue"></demo>

## 展示类型

<p>
支持使用图片或者文字作为 Avatar。
</p>

<demo vue="../../example/avatar/src.vue"></demo>

<p>图片加载失败时，可以使用 <code>error</code> 属性触发函数，默认触发图片填充效果。</p>

<demo vue="../../example/avatar/error.vue"></demo>

<p>当使用图片作为用户头像时，使用 <code>object-fit</code> 属性设置该图片如何在容器中展示。</p>

<demo vue="../../example/avatar/fit.vue"></demo>

## Avatar API

### Avatar 属性

| 属性  | 说明           | 类型                                                | 默认值 |
| ----- | -------------- | --------------------------------------------------- | ------ |
| src   | 图片资源的路径 | `string`                                            | -      |
| size  | 尺寸大小       | `number` / `enum`<Tool :value="'xs,sm,lg,'"></Tool> | 50     |
| shape | 头像的形状     | `enum`<Tool :value="'square,circle,'"></Tool>       | circle |
| fit   | 头像的填充效果 | `enum`<Tool :value="'fill,contain,cover,'"></Tool>  | cover  |

### Avatar 事件

| 名称  | 说明               | 类型       | 默认值                |
| ----- | ------------------ | ---------- | --------------------- |
| error | 图片加载失败时触发 | `Function` | `imageErrorHandler()` |

<script>
</script>
