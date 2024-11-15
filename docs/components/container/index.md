# Container 布局容器

<p>用于布局的容器组件，方便快速搭建页面的基本结构：</p>
<p><code>&lt;t-container&gt;</code>:外层容器。当子元素中包含<code>&lt;t-header&gt;</code>或<code>&lt;t-footer&gt;</code>时，全部子元素会垂直上下排列，否则会水平左右排列。</p>
<p><code>&lt;t-header&gt;</code>:顶栏容器。</p>
<p><code>&lt;t-aside&gt;</code>:侧边栏容器。</p>
<p><code>&lt;t-main&gt;</code>:主要区域容器。</p>
<p><code>&lt;t-footer&gt;</code>:底栏容器。</p>

> **Tips**
>
> 以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。 此外， &lt;t-container&gt;的直接子元素必须是> 后四个组件中的一个或多个。 后四个组件的亲元素必须是一个 &lt;t-container&gt;

## 常见布局

<demo vue="../../example/container/partOne.vue"></demo>
