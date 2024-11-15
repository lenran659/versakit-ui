# Dialog 对话框

## 基础用法

<p>在保留当前页面状态的情况下，告知用户并承载相关操作。</p>
绑定 <code>v-model:value</code>到一个<code>Boolean</code>类型的变量。

<demo vue="../../example/dialog/base.vue"></demo>

## 自定义内容

<p>对话框的内容可以是任何东西。</p>

<demo vue="../../example/dialog/content.vue"></demo>

## 自定义标题

<p>
<code>title</code>
可用于自定义显示标题区域。为了保持可用性，除了使用此插槽外，使用 <code>title</code>属性来指定哪些元素应该读取为对话框标题。
</p>

<demo vue="../../example/dialog/header.vue"></demo>
