import { U as d } from './chunks/theme.ByYns1Tr.js'
import {
  d as m,
  a as o,
  b as s,
  e as t,
  x as r,
  u as i,
  p as l,
  z as n,
  a9 as h,
  Q as c,
} from './chunks/framework.D7H_7AjQ.js'
import { R as v } from './chunks/index.Li0lFkb-.js'
const f = `<template>\r
  <div>\r
    <span>Rain</span>\r
    <ver-divider direction="vertical" />\r
    <span>Home</span>\r
    <ver-divider direction="vertical" border-style="dashed" />\r
    <span>Grass</span>\r
  </div>\r
</template>\r
\r
<script lang="ts" setup>\r
import { VerDivider } from '@versakit/ui'\r
<\/script>\r
`,
  b = m({
    __name: 'vertical',
    setup(a) {
      return (p, e) => (
        o(),
        s('div', null, [
          e[0] || (e[0] = t('span', null, 'Rain', -1)),
          r(i(d), { direction: 'vertical' }),
          e[1] || (e[1] = t('span', null, 'Home', -1)),
          r(i(d), { direction: 'vertical', 'border-style': 'dashed' }),
          e[2] || (e[2] = t('span', null, 'Grass', -1)),
        ])
      )
    },
  }),
  y = `<template>\r
  <div>\r
    <ver-divider>🎇</ver-divider>\r
    <ver-divider position="center">🎇</ver-divider>\r
    <ver-divider position="right">🎇</ver-divider>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { VerDivider } from '@versakit/ui'\r
<\/script>\r
`,
  D = m({
    __name: 'text',
    setup(a) {
      return (p, e) => (
        o(),
        s('div', null, [
          r(i(d), null, { default: l(() => e[0] || (e[0] = [n('🎇')])), _: 1 }),
          r(
            i(d),
            { position: 'center' },
            { default: l(() => e[1] || (e[1] = [n('🎇')])), _: 1 },
          ),
          r(
            i(d),
            { position: 'right' },
            { default: l(() => e[2] || (e[2] = [n('🎇')])), _: 1 },
          ),
        ])
      )
    },
  }),
  A = `<template>\r
  <div>\r
    <p>\r
      There little thoughts are the rustle of leaves; they have their whisper of\r
      joy in my mind.\r
    </p>\r
    <ver-divider line="dashed" />\r
    <p>\r
      There little thoughts are the rustle of leaves; they have their whisper of\r
      joy in my mind.\r
    </p>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { VerDivider } from '@versakit/ui'\r
<\/script>\r
`,
  B = m({
    __name: 'style',
    setup(a) {
      return (p, e) => (
        o(),
        s('div', null, [
          e[0] ||
            (e[0] = t(
              'p',
              null,
              ' There little thoughts are the rustle of leaves; they have their whisper of joy in my mind. ',
              -1,
            )),
          r(i(d), { line: 'dashed' }),
          e[1] ||
            (e[1] = t(
              'p',
              null,
              ' There little thoughts are the rustle of leaves; they have their whisper of joy in my mind. ',
              -1,
            )),
        ])
      )
    },
  }),
  g = `<template>\r
  <div>\r
    <p>\r
      There little thoughts are the rustle of leaves; they have their whisper of\r
      joy in my mind.\r
    </p>\r
    <ver-divider />\r
    <p>\r
      There little thoughts are the rustle of leaves; they have their whisper of\r
      joy in my mind.\r
    </p>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { VerDivider } from '@versakit/ui'\r
<\/script>\r
`,
  x = m({
    __name: 'base',
    setup(a) {
      return (p, e) => (
        o(),
        s('div', null, [
          e[0] ||
            (e[0] = t(
              'p',
              null,
              ' There little thoughts are the rustle of leaves; they have their whisper of joy in my mind. ',
              -1,
            )),
          r(i(d)),
          e[1] ||
            (e[1] = t(
              'p',
              null,
              ' There little thoughts are the rustle of leaves; they have their whisper of joy in my mind. ',
              -1,
            )),
        ])
      )
    },
  }),
  G = JSON.parse(
    '{"title":"Divider 分割线","description":"","frontmatter":{},"headers":[],"relativePath":"components/divider/index.md","filePath":"components/divider/index.md"}',
  ),
  V = { name: 'components/divider/index.md' },
  k = Object.assign(V, {
    setup(a) {
      return (p, e) => {
        const u = c('ClientOnly')
        return (
          o(),
          s('div', null, [
            e[0] ||
              (e[0] = t(
                'h1',
                { id: 'divider-分割线', tabindex: '-1' },
                [
                  n('Divider 分割线 '),
                  t(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#divider-分割线',
                      'aria-label': 'Permalink to "Divider 分割线"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[1] || (e[1] = t('p', null, '区隔内容的分割线。', -1)),
            e[2] ||
              (e[2] = t(
                'h2',
                { id: '基础用法', tabindex: '-1' },
                [
                  n('基础用法 '),
                  t(
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
            e[3] || (e[3] = t('p', null, '对不同段落的文本进行分割。', -1)),
            r(u, null, {
              default: l(() => [
                r(
                  i(v),
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
                    vueCode: i(g),
                  },
                  { vue: l(() => [r(x)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[4] ||
              (e[4] = t(
                'h2',
                { id: '虚线', tabindex: '-1' },
                [
                  n('虚线 '),
                  t(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#虚线',
                      'aria-label': 'Permalink to "虚线"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[5] || (e[5] = t('p', null, '您可以设置分隔符的样式。', -1)),
            r(u, null, {
              default: l(() => [
                r(
                  i(v),
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
                    vueCode: i(A),
                  },
                  { vue: l(() => [r(B)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[6] ||
              (e[6] = t(
                'h2',
                { id: '设置文案', tabindex: '-1' },
                [
                  n('设置文案 '),
                  t(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#设置文案',
                      'aria-label': 'Permalink to "设置文案"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[7] || (e[7] = t('p', null, '可以在分割线上自定义文本内容。', -1)),
            r(u, null, {
              default: l(() => [
                r(
                  i(v),
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
                    vueCode: i(y),
                  },
                  { vue: l(() => [r(D)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[8] ||
              (e[8] = t(
                'h2',
                { id: '垂直分割线', tabindex: '-1' },
                [
                  n('垂直分割线 '),
                  t(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#垂直分割线',
                      'aria-label': 'Permalink to "垂直分割线"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[9] || (e[9] = t('p', null, '垂直方向的分割线。', -1)),
            r(u, null, {
              default: l(() => [
                r(
                  i(v),
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
                    vueCode: i(f),
                  },
                  { vue: l(() => [r(b)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[10] ||
              (e[10] = h(
                '<h2 id="devider-api" tabindex="-1">Devider API <a class="header-anchor" href="#devider-api" aria-label="Permalink to &quot;Devider API&quot;">​</a></h2><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>direction</code></td><td>分隔线的方向，可以是<code>vertical</code>、<code>horizontal</code></td><td><code>string</code></td><td><code>horizontal</code></td></tr><tr><td><code>position</code></td><td>分割线的位置，例如<code>top</code>、<code>right</code></td><td><code>string</code></td><td><code>left</code></td></tr><tr><td><code>line</code></td><td>分隔线的虚实</td><td><code>string</code></td><td><code>solid</code></td></tr></tbody></table>',
                2,
              )),
          ])
        )
      }
    },
  })
export { G as __pageData, k as default }
