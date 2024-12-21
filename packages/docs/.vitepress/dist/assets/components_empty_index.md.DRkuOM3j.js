import { I as m } from './chunks/theme.ByYns1Tr.js'
import {
  a as d,
  j as p,
  p as o,
  z as n,
  u as r,
  b as u,
  e,
  x as a,
  a9 as h,
  Q as y,
} from './chunks/framework.D7H_7AjQ.js'
import { R as i } from './chunks/index.Li0lFkb-.js'
const b = `<template>\r
  <VerEmpty iconName="lightning">\r
    <template #content>这是一个自定义图标</template>\r
  </VerEmpty>\r
</template>\r
<script setup>\r
import { VerEmpty } from '@versakit/ui'\r
<\/script>\r
<style scoped lang="scss"></style>\r
`,
  f = {
    __name: 'extend',
    setup(l) {
      return (s, t) => (
        d(),
        p(
          r(m),
          { iconName: 'lightning' },
          {
            content: o(() => t[0] || (t[0] = [n('这是一个自定义图标')])),
            _: 1,
          },
        )
      )
    },
  },
  x = `<template>\r
  <VerEmpty></VerEmpty>\r
</template>\r
<script setup>\r
import { VerEmpty } from '@versakit/ui'\r
<\/script>\r
<style scoped lang="scss"></style>\r
`,
  _ = {
    __name: 'base',
    setup(l) {
      return (s, t) => (d(), p(r(m)))
    },
  },
  A = JSON.parse(
    '{"title":"Empty 无内容","description":"","frontmatter":{},"headers":[],"relativePath":"components/empty/index.md","filePath":"components/empty/index.md"}',
  ),
  V = { name: 'components/empty/index.md' },
  D = Object.assign(V, {
    setup(l) {
      return (s, t) => {
        const c = y('ClientOnly')
        return (
          d(),
          u('div', null, [
            t[0] ||
              (t[0] = e(
                'h1',
                { id: 'empty-无内容', tabindex: '-1' },
                [
                  n('Empty 无内容 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#empty-无内容',
                      'aria-label': 'Permalink to "Empty 无内容"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            t[1] || (t[1] = e('p', null, '空空如也。', -1)),
            t[2] ||
              (t[2] = e(
                'h2',
                { id: '基础用法', tabindex: '-1' },
                [
                  n('基础用法 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#基础用法',
                      'aria-label': 'Permalink to "基础用法"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            a(c, null, {
              default: o(() => [
                a(
                  r(i),
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
                    vueCode: r(x),
                  },
                  { vue: o(() => [a(_)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t[3] ||
              (t[3] = e(
                'h2',
                { id: '自定义图标', tabindex: '-1' },
                [
                  n('自定义图标 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#自定义图标',
                      'aria-label': 'Permalink to "自定义图标"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            a(c, null, {
              default: o(() => [
                a(
                  r(i),
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
                    vueCode: r(b),
                  },
                  { vue: o(() => [a(f)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t[4] ||
              (t[4] = h(
                '<h2 id="empty-api" tabindex="-1">Empty API <a class="header-anchor" href="#empty-api" aria-label="Permalink to &quot;Empty API&quot;">​</a></h2><h3 id="empty-属性" tabindex="-1">Empty 属性 <a class="header-anchor" href="#empty-属性" aria-label="Permalink to &quot;Empty 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>showDescription</code></td><td>是否展示描述信息</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>showButton</code></td><td>是否展示按钮</td><td><code>boolean</code></td><td><code>true</code></td></tr></tbody></table><h3 id="empty-插槽" tabindex="-1">Empty 插槽 <a class="header-anchor" href="#empty-插槽" aria-label="Permalink to &quot;Empty 插槽&quot;">​</a></h3><table tabindex="0"><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td><code>content</code></td><td>自定义内容文字</td></tr><tr><td><code>iconName</code></td><td>自定义图标</td></tr></tbody></table>',
                5,
              )),
          ])
        )
      }
    },
  })
export { A as __pageData, D as default }
