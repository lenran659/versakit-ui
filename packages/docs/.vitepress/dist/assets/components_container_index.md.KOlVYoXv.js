import { b as d, s as m, c as p } from './chunks/theme.ByYns1Tr.js'
import {
  d as u,
  a as o,
  b as c,
  x as n,
  p as r,
  u as t,
  z as a,
  _ as f,
  a9 as v,
  Q as _,
} from './chunks/framework.D7H_7AjQ.js'
import { R as h } from './chunks/index.Li0lFkb-.js'
const b = `<template>\r
  <div class="common-layout">\r
    <ver-container class="is-vertical">\r
      <ver-header>Header</ver-header>\r
      <ver-main>Main</ver-main>\r
    </ver-container>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { VerContainer, VerHeader, VerMain } from '@versakit/ui'\r
<\/script>\r
\r
<style scoped>\r
.common-layout {\r
  .is-vertical {\r
    flex-direction: column;\r
  }\r
\r
  .ver-header {\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
    background-color: #c6e2ff;\r
  }\r
  .ver-main {\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
    background-color: #ecf5ff;\r
    height: 150px;\r
  }\r
}\r
</style>\r
`,
  x = { class: 'common-layout' },
  y = u({
    __name: 'partOne',
    setup(s) {
      return (i, e) => (
        o(),
        c('div', x, [
          n(
            t(p),
            { class: 'is-vertical' },
            {
              default: r(() => [
                n(t(d), null, {
                  default: r(() => e[0] || (e[0] = [a('Header')])),
                  _: 1,
                }),
                n(t(m), null, {
                  default: r(() => e[1] || (e[1] = [a('Main')])),
                  _: 1,
                }),
              ]),
              _: 1,
            },
          ),
        ])
      )
    },
  }),
  C = f(y, [['__scopeId', 'data-v-af5d3968']]),
  B = JSON.parse(
    '{"title":"Container 布局容器","description":"","frontmatter":{},"headers":[],"relativePath":"components/container/index.md","filePath":"components/container/index.md"}',
  ),
  g = { name: 'components/container/index.md' },
  A = Object.assign(g, {
    setup(s) {
      return (i, e) => {
        const l = _('ClientOnly')
        return (
          o(),
          c('div', null, [
            e[0] ||
              (e[0] = v(
                '<h1 id="container-布局容器" tabindex="-1">Container 布局容器 <a class="header-anchor" href="#container-布局容器" aria-label="Permalink to &quot;Container 布局容器&quot;">​</a></h1><p>用于布局的容器组件，方便快速搭建页面的基本结构：</p><p><code>ver-container</code>外层容器。当子元素中包含<code>ver-header</code>或<code>t-footer</code>时，全部子元素会垂直上下排列，否则会水平左右排列。</p><p><code>ver-header</code>:顶栏容器。 <code>ver-aside</code>:侧边栏容器。 <code>ver-main</code>:主要区域容器。 <code>ver-footer</code>:底栏容器。</p><blockquote><p><strong>Tips</strong></p><p>以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。 此外， <code>ver-container</code>的直接子元素必须是&gt; 后四个组件中的一个或多个。 后四个组件的亲元素必须是一个 <code>ver-container</code></p></blockquote><h2 id="常见布局" tabindex="-1">常见布局 <a class="header-anchor" href="#常见布局" aria-label="Permalink to &quot;常见布局&quot;">​</a></h2>',
                6,
              )),
            n(l, null, {
              default: r(() => [
                n(
                  t(h),
                  {
                    title: '',
                    description: '',
                    select: 'vue',
                    order: 'vue,react,html',
                    github: '',
                    gitlab: '',
                    stackblitz: '%7B%22show%22%3Afalse%7D',
                    codesandbox: '%7B%22show%22%3Afalse%7D',
                    codeplayer: '%7B%22show%22%3Afalse%7D',
                    files:
                      '%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D',
                    scope: '',
                    visible: !0,
                    vueCode: t(b),
                  },
                  { vue: r(() => [n(C)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
          ])
        )
      }
    },
  })
export { B as __pageData, A as default }
