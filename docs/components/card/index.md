# Card 卡片

<p>将信息聚合在卡片容器中展示。</p>

## 基础用法

卡片包含标题，内容以及操作区域。

Card 组件 由 `header` 和 `body`组成。`header` 是可选的，其内容取决于一个具名的 `solt`

<demo vue="../../example/card/base.vue"></demo>

## 简单卡片

卡片可以只有内容区域。

<demo vue="../../example/card/simple.vue"></demo>

## 带有阴影效果的卡片

你可以定义什么时候展示卡片的阴影效果。

通过 `shadow`属性设置卡片阴影出现的时刻。该属性的值可以是: `always`、`hover` 或 `never`

<demo vue="../../example/card/shadow.vue"></demo>
