import { k as n, V as u } from './chunks/theme.CQRJ-XKT.js'
import {
  d as p,
  a as o,
  j as x,
  p as a,
  v as l,
  z as t,
  u as r,
  _ as f,
  b as v,
  e as s,
  a8 as b,
  S as y,
} from './chunks/framework.DUC_U6YZ.js'
import { R as m } from './chunks/index.BOmkyUj-.js'
const V = `c
<script setup lang="ts">
import { VerRow, VerText } from 'versakit-ui'
<\/script>

<template>
  <ver-row>
    <ver-text class="w-100px" truncated>Self element set width 100px</ver-text>
  </ver-row>
</template>

<style scoped>
.w-100px {
  width: 100px;
}
</style>
`,
  F = p({
    __name: 'truncated',
    setup(d) {
      return (c, e) => (
        o(),
        x(r(u), null, {
          default: a(() => [
            l(
              r(n),
              { class: 'w-100px', truncated: '' },
              {
                default: a(
                  () => e[0] || (e[0] = [t('Self element set width 100px')]),
                ),
                _: 1,
              },
            ),
          ]),
          _: 1,
        })
      )
    },
  }),
  h = f(F, [['__scopeId', 'data-v-bac4c8ed']]),
  _ = `<script setup lang="ts">
import { VerRow, VerText } from 'versakit-ui'
<\/script>

<template>
  <ver-row>
    <ver-text class="mx4" size="large">Large</ver-text>
    <ver-text class="mx4">Default</ver-text>
    <ver-text class="mx4" size="small">Small</ver-text>
  </ver-row>
</template>

<style scoped>
.mx4 {
  margin: 0px 10px;
}
</style>
`,
  D = p({
    __name: 'size',
    setup(d) {
      return (c, e) => (
        o(),
        x(r(u), null, {
          default: a(() => [
            l(
              r(n),
              { class: 'mx4', size: 'large' },
              { default: a(() => e[0] || (e[0] = [t('Large')])), _: 1 },
            ),
            l(
              r(n),
              { class: 'mx4' },
              { default: a(() => e[1] || (e[1] = [t('Default')])), _: 1 },
            ),
            l(
              r(n),
              { class: 'mx4', size: 'small' },
              { default: a(() => e[2] || (e[2] = [t('Small')])), _: 1 },
            ),
          ]),
          _: 1,
        })
      )
    },
  }),
  g = f(D, [['__scopeId', 'data-v-f17bb99d']]),
  w = `<script setup lang="ts">
import { VerRow, VerText } from 'versakit-ui'
<\/script>

<template>
  <ver-row>
    <ver-text class="mx4">Default</ver-text>
    <ver-text class="mx4" type="primary">Primary</ver-text>
    <ver-text class="mx4" type="success">Success</ver-text>
    <ver-text class="mx4" type="info">Info</ver-text>
    <ver-text class="mx4" type="warning">Warning</ver-text>
    <ver-text class="mx4" type="error">Drange</ver-text>
  </ver-row>
</template>

<style scoped>
.mx4 {
  margin: 0px 10px;
}
</style>
`,
  A = p({
    __name: 'base',
    setup(d) {
      return (c, e) => (
        o(),
        x(r(u), null, {
          default: a(() => [
            l(
              r(n),
              { class: 'mx4' },
              { default: a(() => e[0] || (e[0] = [t('Default')])), _: 1 },
            ),
            l(
              r(n),
              { class: 'mx4', type: 'primary' },
              { default: a(() => e[1] || (e[1] = [t('Primary')])), _: 1 },
            ),
            l(
              r(n),
              { class: 'mx4', type: 'success' },
              { default: a(() => e[2] || (e[2] = [t('Success')])), _: 1 },
            ),
            l(
              r(n),
              { class: 'mx4', type: 'info' },
              { default: a(() => e[3] || (e[3] = [t('Info')])), _: 1 },
            ),
            l(
              r(n),
              { class: 'mx4', type: 'warning' },
              { default: a(() => e[4] || (e[4] = [t('Warning')])), _: 1 },
            ),
            l(
              r(n),
              { class: 'mx4', type: 'error' },
              { default: a(() => e[5] || (e[5] = [t('Drange')])), _: 1 },
            ),
          ]),
          _: 1,
        })
      )
    },
  }),
  G = f(A, [['__scopeId', 'data-v-7fea2560']]),
  k = JSON.parse(
    '{"title":"Text 文本","description":"","frontmatter":{},"headers":[],"relativePath":"components/text/index.md","filePath":"components/text/index.md"}',
  ),
  B = { name: 'components/text/index.md' },
  R = Object.assign(B, {
    setup(d) {
      return (c, e) => {
        const i = y('ClientOnly')
        return (
          o(),
          v('div', null, [
            e[0] ||
              (e[0] = s(
                'h1',
                { id: 'text-文本', tabindex: '-1' },
                [
                  t('Text 文本 '),
                  s(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#text-文本',
                      'aria-label': 'Permalink to "Text 文本"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[1] ||
              (e[1] = s(
                'h2',
                { id: '基础使用', tabindex: '-1' },
                [
                  t('基础使用 '),
                  s(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#基础使用',
                      'aria-label': 'Permalink to "基础使用"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[2] ||
              (e[2] = s(
                'p',
                null,
                [
                  t('由 '),
                  s('code', null, 'type'),
                  t(' 属性来选择 Text 的类型'),
                ],
                -1,
              )),
            l(i, null, {
              default: a(() => [
                l(
                  r(m),
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
                    vueCode: r(w),
                  },
                  { vue: a(() => [l(G)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[3] ||
              (e[3] = s(
                'h2',
                { id: '尺寸', tabindex: '-1' },
                [
                  t('尺寸 '),
                  s(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#尺寸',
                      'aria-label': 'Permalink to "尺寸"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[4] ||
              (e[4] = s(
                'p',
                null,
                [
                  t(' 使用'),
                  s('code', null, 'size'),
                  t('属性配置尺寸，可选的尺寸大小有:'),
                  s('code', null, 'large'),
                  t(','),
                  s('code', null, 'default'),
                  t('或'),
                  s('code', null, 'small'),
                ],
                -1,
              )),
            l(i, null, {
              default: a(() => [
                l(
                  r(m),
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
                    vueCode: r(_),
                  },
                  { vue: a(() => [l(g)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[5] ||
              (e[5] = s(
                'h2',
                { id: '省略', tabindex: '-1' },
                [
                  t('省略 '),
                  s(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#省略',
                      'aria-label': 'Permalink to "省略"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[6] ||
              (e[6] = s(
                'p',
                null,
                [
                  t('通过'),
                  s('code', null, 'truncated '),
                  t('属性,在文本超过视图或最大宽度设置时展示省略符。'),
                ],
                -1,
              )),
            l(i, null, {
              default: a(() => [
                l(
                  r(m),
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
                    vueCode: r(V),
                  },
                  { vue: a(() => [l(h)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[7] ||
              (e[7] = b(
                '<h2 id="text-api" tabindex="-1">Text API <a class="header-anchor" href="#text-api" aria-label="Permalink to &quot;Text API&quot;">​</a></h2><h3 id="text属性" tabindex="-1">Text属性 <a class="header-anchor" href="#text属性" aria-label="Permalink to &quot;Text属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>type</code></td><td>文本的类型，例如可以是 <code>primary</code>（主要按钮）、<code>secondary</code>（次要按钮）等不同分类来表示不同样式风格</td><td><code>string</code></td><td><code>default</code></td></tr><tr><td><code>size</code></td><td>用于调整文本的大小，例如<code>large</code>（大）、<code>small</code>（小）</td><td><code>string</code></td><td><code>default</code></td></tr><tr><td><code>truncated </code></td><td>在文本超过视图或最大宽度设置时展示省略符。</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table>',
                3,
              )),
          ])
        )
      }
    },
  })
export { k as __pageData, R as default }
